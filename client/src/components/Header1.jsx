import "../styles/Header1.css"
import { PiHandWavingFill } from "react-icons/pi";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import dashBoardImg from "../assets/dashboardimg.webp"
import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";


const Header1 = () => {

    const [scrollPercentage , setScrollPercentage] = useState(0);
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        const handleScroll =() =>{
            const newScrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setScrollPercentage(newScrollPercentage);
            if(newScrollPercentage > 5){
                setScroll(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    const swingBackAnimation = {
        transform: `rotateX(0deg)`
      };
    

  return (
    <div className="inclusive-header1">
        <div className="top">
                
                <div className= "title-wrapper">
                        <ScrollAnimation>
                        <div className="welcome">
                            
                            <p><PiHandWavingFill color="gold"/>WELCOME TO MANAGE WISE!</p>
                            
                        </div>
                        </ScrollAnimation>
                </div>
                
                
                <div className="msg-wrapper">
                    <ScrollAnimation>
                    <p>
                        Empower your business with <span>Strategic</span> insights
                    </p>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="desc">
                        <span>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</span>
                    </div>
                    </ScrollAnimation>
                </div>
                
                
                <div className="options-wrapper-head">
                    <ScrollAnimation>
                    <div className="options-wrapper-internal">
                    <div className="get-started-wrapper">
                        <span className="get-started">Get Started</span>
                        <span className="get-started-hover">
                        <IoArrowForwardCircleSharp/>
                        </span>
                    </div>
                    
                    <div className="demo">
                        
                        <span>Whatch Demo<span className="svg"><FaCirclePlay/></span></span>

                    </div>
                    </div>
                    </ScrollAnimation>
                </div>
               
        </div>
        <div className="bottom">
            <div className="img-wrap" >
                <img src={dashBoardImg} style={scroll ? swingBackAnimation : null} alt="dasboard"/>
            </div>
        </div>
    </div>
  )
}

export default Header1