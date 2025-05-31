import React, { useState, useEffect, useRef } from 'react';

function Menu({ visible = true }) {
  const initialWidth = 300;
  const initialHeight = 150;

  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [position, setPosition] = useState({ top: '38rem', center: false });
  const [isStopped, setIsStopped] = useState(false);
  const [absoluteTop, setAbsoluteTop] = useState(0);

  const stopPointRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    const handleScroll = () => {
      if (!stopPointRef.current || !boxRef.current) return;

      const stopPointTop = stopPointRef.current.getBoundingClientRect().top;

      // If box should stop moving when reaching stop point
      if (!isStopped && stopPointTop <= window.innerHeight / 3) {
        const currentTop = window.scrollY + window.innerHeight / 3;
        setAbsoluteTop(currentTop);
        setIsStopped(true);
        return;
      }

      // If scrolling back up — re-enable moving when stopPoint is back far enough below viewport center
      if (isStopped && stopPointTop > window.innerHeight / 2) {
        setIsStopped(false);
      }

      if (isStopped) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const targetWidth = viewportWidth * 1.0;
      const targetHeight = viewportHeight * 1.0;

      const scrollHeight = document.documentElement.scrollHeight - viewportHeight;
      const rawScrollProgress = Math.min(window.scrollY / scrollHeight, 1);
      const progress = Math.min(Math.pow(rawScrollProgress, 1.2) * 1.2, 1);




      let newWidth, newHeight;

      if (progress <= 0.5) {
        const scaleUpProgress = progress / 0.8;
        newWidth = initialWidth + (targetWidth - initialWidth) * scaleUpProgress;
        newHeight = initialHeight + (targetHeight - initialHeight) * scaleUpProgress;
      } else {
        const scaleDownProgress = (progress - 0.5) / 0.5;
        newWidth = targetWidth - (targetWidth - initialWidth) * scaleDownProgress;
        newHeight = targetHeight - (targetHeight - initialHeight) * scaleDownProgress;
      }

      setSize({ width: newWidth, height: newHeight });

      if (window.scrollY > 0 && !position.center) {
        setPosition({ top: '50%', center: true });
      } else if (window.scrollY === 0 && position.center) {
        setPosition({ top: '44rem', center: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [position.center, visible, isStopped]);

  if (!visible) {
    return null;
  }

  return (
    <div style={{ overflow: 'hidden' }} className="min-h-[210vh] mt-96 cover">
      <div className="fixed inset-0 pointer-events-none z-0">
  <div
    ref={boxRef}
    style={{
      width: `${size.width}px`,
      height: `${size.height}px`,
      backgroundColor: 'skyblue',
      position: isStopped ? 'absolute' : 'fixed',
      top: isStopped ? `${absoluteTop}px` : position.top,
      left: '50%',
      transform: `${position.center && !isStopped ? 'translate(-50%, -50%)' : 'translateX(-50%)'}`,
      transition:
        'width 0.5s ease-out, height 0.5s ease-out, top 0.5s ease-out, transform 0.5s ease-out',
      zIndex: 0,
    }}
  />
</div>

      <div
        ref={stopPointRef}
        className="mt-[330vh] flex justify-center ml-[-600px] text-center text-7xl font-bold absolute"
        >
       <h1 style={{fontWeight:'bold'}} className='mt-[-30px] ml-[830px] poppins '> We are  <span style={{backgroundColor:'blue'}} className='p-2' >More than </span>Digital Agancy          </h1>
      </div>
    </div>
  );
}

export default Menu;
