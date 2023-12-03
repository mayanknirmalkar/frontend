//Importing the necessary icons, css files and images
import "../styles/ScrollAnimation.css"
import { useRef, useEffect } from "react";

const ScrollAnimation = ({ children }) => {
    const elementRef = useRef(null);
  
    
    useEffect(() => {
      //intersection observer is a javascript api that helps in observing any element's intersection with the viewport/root element
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            //going to each element intersected with viewport that has been wrapped, and if it is intersecting we are adding class to the element fo adding styles , here I'm using for lazy loading
            if (entry.isIntersecting) {

              entry.target.classList.add( 'Bounce');
              //unregistering the current element to which the class has been added
              observer.unobserve(entry.target);
            }
          });
        },
        //to set when will the callback fuction is triggered here when 50% of the element is in viewport it is triggered
        {threshold:0.5}
      );
  
      if (elementRef.current) {
        //if we have wrapped any element observe is called
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          //unregistering the all elements from observer function
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
    return <div ref={elementRef}>{children}</div>;
  };
  
  export default ScrollAnimation;