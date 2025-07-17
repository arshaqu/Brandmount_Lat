import React, { useRef, useEffect, useState } from 'react';
import './VisionMission.css';

function VisionMission() {
  const scrollRef = useRef();
  const containerRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // 🟢 Ensure it always starts from the first section (Our Vision)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  // Detect when section is visible
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isInView = rect.top < windowHeight && rect.bottom > 0;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

      const relaxedTolerance = 200;
      const shouldActivate =
        distanceFromCenter <= relaxedTolerance || (isInView && rect.height <= windowHeight);

      setIsActive(shouldActivate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Track horizontal scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollElement = scrollRef.current;
      const sectionWidth = scrollElement.clientWidth;
      const currentScroll = scrollElement.scrollLeft;
      const currentSection = Math.round(currentScroll / sectionWidth);

      setIsAtStart(currentSection === 0);
      setIsAtEnd(currentSection === 2);

      if (currentSection === 2 || currentSection === 0) {
        document.body.style.overflow = '';
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Lock vertical scroll and enable horizontal scrolling with wheel
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
    };

    const handleWheel = (e) => {
      if (!scrollRef.current || !isActive) return;

      const scrollElement = scrollRef.current;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const sectionWidth = scrollElement.clientWidth;
      const currentScroll = scrollElement.scrollLeft;
      const currentSection = Math.round(currentScroll / sectionWidth);

      if (isScrollingDown && !isAtEnd) {
        e.preventDefault();
        lockScroll();
        const nextSection = Math.min(currentSection + 1, 2);
        scrollElement.scrollTo({
          left: nextSection * sectionWidth,
          behavior: 'smooth',
        });
      } else if (isScrollingUp && !isAtStart) {
        e.preventDefault();
        lockScroll();
        const prevSection = Math.max(currentSection - 1, 0);
        scrollElement.scrollTo({
          left: prevSection * sectionWidth,
          behavior: 'smooth',
        });
      } else {
        unlockScroll(); // allow vertical scroll if at ends
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
    };
  }, [isActive, isAtStart, isAtEnd]);

  // Touch swipe support for mobile
  useEffect(() => {
    if (!isActive) return;

    let startX = 0;
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e) => {
      if (!scrollRef.current) return;

      const deltaX = startX - e.touches[0].clientX;
      const deltaY = startY - e.touches[0].clientY;

      if (!isScrolling && Math.abs(deltaX) > Math.abs(deltaY)) {
        isScrolling = true;
      }

      if (isScrolling) {
        e.preventDefault();
        scrollRef.current.scrollLeft += deltaX * 0.8;
        startX = e.touches[0].clientX;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isActive]);

  return (
    <div className="vision-container" ref={containerRef}>
      <div className="vision-scroll-area" ref={scrollRef}>
        <div className="scroll-wrapper">
          <div className="section">
            <div style={{ fontSize:'28px'}} className="left poppinsx">Our Vision</div>
            <div style={{textAlign:'left' , fontSize:'18px'}} className="right poppin">
              To become the industry leader in setting modern trends and developing brand identities,
              becoming the preferred choice for leaders seeking trendy and impactful branding solutions.
            </div>
          </div>

          <div className="section">
            <div style={{ fontSize:'28px'}} className="left poppinsx">Our Mission</div>
            <div style={{textAlign:'left' , fontSize:'18px'}} className="right poppin">
              We are dedicated to offering comprehensive branding and identity creation services for individuals,
              products, and organizations, empowering them to become trendsetters and industry leaders in their respective fields.
            </div>
          </div>

          <div  className="section">
           <div style={{ fontSize:'28px'}} className="left poppinsx">Core Values</div>
            <div className="right">
              <ul style={{textAlign:'left' , fontSize:'18px'}} className='poppin'>
                <li><strong>Creativity:</strong> We bring innovative thinking to every project.</li>
                <li><strong>Integrity:</strong> We act with honesty and transparency.</li>
                <li><strong>Excellence:</strong> We strive to exceed expectations.</li>
                <li><strong>Client Focus:</strong> Our clients' goals are our mission.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isActive && (
        <>
          <div className="scroll-progress">
            <div className="progress-dots">
              <span className={`dot ${isAtStart ? 'active' : ''}`}></span>
              <span className={`dot ${!isAtStart && !isAtEnd ? 'active' : ''}`}></span>
              <span className={`dot ${isAtEnd ? 'active' : ''}`}></span>
            </div>
            <div className="scroll-hint">
              {isAtStart && "Scroll down to explore →"}
              {!isAtStart && !isAtEnd && "← Scroll to navigate →"}
              {isAtEnd && "Scroll down to continue ↓"}
            </div>
          </div>

          <div className="center-indicator">
            <div className="center-dot"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default VisionMission;
