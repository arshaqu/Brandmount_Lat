import React, { useState, useEffect, useRef } from 'react';
import VideoAni from '../Assets/Videoanime.mp4';

function Menu({ visible = true }) {
  const initialWidth = 650;
  const initialHeight = 250;

  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [position, setPosition] = useState({ top: '144rem', center: false });
  const [isStopped, setIsStopped] = useState(false);
  const [absoluteTop, setAbsoluteTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showMoreThan, setShowMoreThan] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const stopPointRef = useRef(null);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!visible || isMobile) return;

    const handleScroll = () => {
      if (!stopPointRef.current || !videoRef.current) return;

      const stopPointTop = stopPointRef.current.getBoundingClientRect().top;
      const stopPointHeight = stopPointRef.current.getBoundingClientRect().height;
      const textCenter = stopPointTop + stopPointHeight / 2;

      const videoRect = videoRef.current.getBoundingClientRect();
      const videoBottom = videoRect.top + videoRect.height;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
                                                                                                                                                                                                                                                                                                                                                                                                     
      const targetWidth = viewportWidth * 1.0;
      const targetHeight = viewportHeight * 1.0;

      const scrollHeight = document.documentElement.scrollHeight - viewportHeight;
      const rawScrollProgress = Math.min(window.scrollY / scrollHeight, 1);
 const progress = Math.min(window.scrollY / (scrollHeight * 0.6), 1);

      const minWidth = 500;
      const minHeight = 150;

      if (window.scrollY < 200) {
        setSize({ width: initialWidth, height: initialHeight });
        setPosition({ top: '48rem', center: false });
        setIsStopped(false);
        return;
      }

      let newWidth, newHeight;

      if (progress <= 0.5) {
        const scaleUpProgress = progress / 0.5;
        newWidth = initialWidth + (targetWidth - initialWidth) * scaleUpProgress;
        newHeight = initialHeight + (targetHeight - initialHeight) * scaleUpProgress;
      } else {
        const scaleDownProgress = (progress - 0.3) / 0.3;
        newWidth = Math.max(targetWidth - (targetWidth - initialWidth) * scaleDownProgress, minWidth);
        newHeight = Math.max(targetHeight - (targetHeight - initialHeight) * scaleDownProgress, minHeight);
      }

      if (!isStopped && stopPointTop === viewportHeight / 3) {
        const currentTop = window.scrollY + viewportHeight / 3;
        setAbsoluteTop(currentTop);
        setIsStopped(true);
        return;
      }

      if (isStopped && stopPointTop > viewportHeight / 2) {
        setIsStopped(false);
      }

      if (isStopped) return;

      setSize({ width: newWidth, height: newHeight });

      if (window.scrollY >= 200 && !position.center) {
        setPosition({ top: '50%', center: true });
      }

      if (videoBottom > textCenter) {
        if (isVisible) {
          setIsVisible(false);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setShowMoreThan(true);
          }, 50);
        }
      } else {
        setIsVisible(true);
        setShowMoreThan(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [position.center, visible, isStopped, isMobile]);

  if (!visible) {
    return null;
  }

  return (
    <div style={{ overflow: 'hidden' }} className="md:min-h-[220vh] cover">
      
      {/* Video */}
      <div className={isMobile ? "w-full relative z-0 mt-20" : "fixed inset-0 pointer-events-none z-0"}>
        <video
          ref={videoRef}
          src={VideoAni}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: isMobile ? '100%' : `${size.width}px`,
            height: isMobile ? 'auto' : `${size.height}px`,
            position: isMobile ? 'relative' : (isStopped ? 'absolute' : 'fixed'),
            top: isMobile ? '0' : (isStopped ? `${absoluteTop}px` : position.top),
            left: isMobile ? '0' : '50%',
            transform: isMobile ? 'none' : `${position.center && !isStopped ? 'translate(-50%, -50%)' : 'translateX(-50%)'}`,
            objectFit: 'cover',
            opacity: isMobile ? 1 : (isVisible ? 1 : 0),
            pointerEvents: isMobile ? 'auto' : (isVisible ? 'auto' : 'none'),
            transition: isMobile
              ? 'none'
              : 'width 0.2s ease-out, height 0.1s ease-out, top 0.2s ease-out, transform 0.2s ease-out, opacity 0.2s ease-out',
            zIndex: 0,
          }}
        />
      </div>

      {/* Stop Point */}
      <div
        ref={stopPointRef}
        className="absolute md:mt-[428vh] mt-28 md:ml-[220px] p-12 flex justify-center text-center font-bold poppins  text-5xl md:text-8xl"
      >
        <h1
          style={{ letterSpacing: '5px' }}
          className="  md:mt-[150px]  poppins text-gray-400 font-bold hover:text-gray-700 poppins"
        >
          We are{' '}
        <span
        
  className={`inline-block  transition-all duration-500 ${
    isMobile || showMoreThan ? 'opacity-100' : 'opacity-0'
  } md:min-w-[250px] sm:min-w-[350px] md:min-w-[450px]`}
>
  <span className="md:p-4 md:mt-4 md:bg-black hover:bg-white text-gray-400 transition-colors duration-300 md:font-bold md:poppinsx">
    More than<br />
  </span>
</span>

          <span className="block md:p-4 md:mt-4 mt-4  ">Digital Agency</span>
        </h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </div>
    </div>
  );
}

export default Menu;
