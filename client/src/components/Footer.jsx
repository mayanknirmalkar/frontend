//importing css files, images, icons, and other dependencies
import "../styles/Footer.css"
import { FaHeart } from "react-icons/fa";
import Alex from "../assets/Alex.webp"
import David from "../assets/David.webp"
import Sarah from "../assets/Sarah.webp"
import Emily from "../assets/Emily.webp"
import emoji from "../assets/emoji.jpg"
import { PiHandWavingFill } from "react-icons/pi";
import logo from "../assets/logo.webp"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import ScrollAnimation from "./ScrollAnimation";
import { useEffect, useState } from "react";

const Footer = () => {

    //This state have been created for listening to the event of scroll over 90% of the page i.e footer of the page. This is done for created a swinging effect for the banner
    
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        //handler for scroll event
        const handleScroll =() =>{
            //calculating the percentage of whole page that have been scrolled
            const newScrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            //if the page have been scrolled above 90% i.e you are over the element that we wish to be swinged ser state values which can be further used to change the roate value so that the element is only swinged once and never again
            if(newScrollPercentage > 91){
                setIsScrolled(true)
            }
        }
        //adding scrool event listener
        window.addEventListener('scroll',handleScroll);

        //removing scroll event listener
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    })

  return (
    <div className="footer-inclusive">
        <div className="footer-top">
            <div className="footer-top-top">
                <span><FaHeart color="red"/> TESTIMONIAL</span>
            </div>
            <ScrollAnimation>
            <div className="footer-top-mid">
                <p>Hear from our <span>Satisfied</span> clients</p>
            </div>
            </ScrollAnimation>
            <div className="footer-top-bottom">
                <span>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</span>
            </div>
        </div>
        <ScrollAnimation>
        <div className="footer-mid">
            <div className="container">
                <div className="cards">
                    <div className="cards-top">
                        <p>
                        "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.
                        </p>
                    </div>
                    <div className="cards-bottom">
                        <img src={Alex} alt="alex"/>
                        <i>
                        <span>Alex</span>
                        <p>IT Manager</p>
                        </i>
                    </div>
                </div>
                <div className="cards">
                     <div className="cards-top">
                        <p>
                        "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
                        </p>
                    </div>
                    <div className="cards-bottom">
                    <img src={Emily} alt="emily"/>
                        <i>
                        <span>Emily</span>
                        <p>Art Director</p>
                        </i>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-top">
                        <p>
                        "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.
                        </p>
                    </div>
                    <div className="cards-bottom">
                    <img src={David} alt="david"/>
                        <i>
                        <span>David</span>
                        <p>Freelancer</p>
                        </i>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards-top">
                        <p>
                        "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.
                        </p>
                    </div>
                    <div className="cards-bottom">
                    <img src={Sarah} alt="Sarah"/>
                        <i>
                        <span>Sarah</span>
                        <p>Project Manager</p>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        </ScrollAnimation>
        <div className="footer-bottom">
            <div className="banner" style={isScrolled ? {transform: `rotateX(0deg)`} : {}}>
                <div className="banner-left">
                    <div className="banner-left-top">
                        
                        <span>
                        <PiHandWavingFill color="gold"/>  DON'T MISS OUT
                        </span>
                    </div>
                    <div className="banner-left-mid">
                        <p>Unleash your <span>Potential</span> with us</p>
                    </div>
                    <div className="banner-left-bottom">
                        <span>Join our community of ambitious individuals and organizations eager to make a difference.</span>
                    </div>
                    <div className="banner-left-bottommost">
                        <div className="btn-wrapper">
                            <span>Try out now </span>
                            <i><IoArrowForwardCircleSharp color="white" size={30}/></i>
                        </div>
                    </div>
                </div>
                <div className="banner-right">
                    <div className="banner-right-top">
                        <span>200+ <p>Happy users</p></span>
                    </div>
                    <div className="banner-right-bottom">
                        <img src={emoji} alt="emoji"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottommost">
            <div className="footer-bottommost-top">
                <div className="footer-bottommost-top-left">
                    <img src={logo} alt="logo"/>
                    <span>
                        ManageWise
                    </span>
                </div>
                <div className="footer-bottommost-top-right">
                    <span>Features</span>
                    <span>FAQ</span>
                    <span>Pricing</span>
                    <span>Testimonial</span>
                </div>
            </div>
            <div className="footer-bottommost-bottom">
                <div className="footer-bottommost-bottom-left">
                    <span>@ 2022 ManageWise, Inc.</span>
                </div>
                <div className="footer-bottommost-bottom-right">
                    <FaLinkedin/>
                    <FaSquareXTwitter/>
                    <FaInstagramSquare/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer