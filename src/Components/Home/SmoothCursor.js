import React, { useEffect, useRef } from 'react';
import './Home.scss';

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  
  // Use refs to store mutable data without triggering re-renders
  const mousePosition = useRef({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Update mouse coordinates on move
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      mousePosition.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    // 2. Animation Loop
    const animateCursor = () => {
      const { x: targetX, y: targetY } = mousePosition.current;
      const { x: currentX, y: currentY } = circlePosition.current;

      // LERP (Linear Interpolation) Logic
      // The 0.15 factor controls the speed/delay. Lower = smoother/slower.
      const distX = targetX - currentX;
      const distY = targetY - currentY;

      circlePosition.current.x = currentX + (distX * 0.1);
      circlePosition.current.y = currentY + (distY * 0.1);

      // Apply the transformation directly to the DOM element
      if (cursorRef.current) {
        // We subtract half the width/height (20px) to center the circle
        const x = circlePosition.current.x - 1; 
        const y = circlePosition.current.y - 1;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const animationId = requestAnimationFrame(animateCursor);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div className="cursor-circle" ref={cursorRef} />;
};

export default SmoothCursor;