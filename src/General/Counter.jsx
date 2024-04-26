import React, { useState, useEffect, useRef } from "react";

const Counter = ({ maxValue, children, className }) => {
  const [count, setCount] = useState(1);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && count < maxValue) {
        const intervalId = setInterval(() => {
          setCount((prevCount) => {
            const increment = maxValue < 100 ? 1 : 150;
            const newCount = prevCount + increment;
            if (newCount >= maxValue) {
              clearInterval(intervalId);
              return maxValue;
            }
            return newCount;
          });
        }, 150);

        return () => clearInterval(intervalId);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count, maxValue]);

  return (
    <h2 className={`text-4xl font-bold ${className || ""}`} ref={counterRef}>
      {count} {children}
    </h2>
  );
};

export default Counter;
