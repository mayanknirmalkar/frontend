import "../styles/ScrollAnimation.css"
import { useRef, useEffect } from "react";

const ScrollAnimation = ({ children }) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add( 'Bounce');
              observer.unobserve(entry.target);
            }
          });
        },
        {threshold:0.5}
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
    return <div className="Bounce" ref={elementRef}>{children}</div>;
  };
  
  export default ScrollAnimation;