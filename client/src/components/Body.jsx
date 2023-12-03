import { BsEmojiHeartEyesFill } from "react-icons/bs";
import "../styles/Body.css"
import { CiMobile2 } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { GoFlame } from "react-icons/go";
import ScrollAnimation from "./ScrollAnimation";
import gitlab from "../assets/gitlab.svg"
import gmail from "../assets/gmail.svg";
import dropbox from "../assets/dropbox.svg"
import slack from "../assets/slack.svg"
import { FaHammer } from "react-icons/fa";
import connectapp from "../assets/connectapp.webp"
import { useState, useEffect } from "react";

const Body = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <div className="inclusive-body">
        <div className="body-wrapper">
                <div className="body-head">
                    <div className="body-head-top">
                        <BsEmojiHeartEyesFill color="gold"/>
                        <span>AND MORE...</span>
                    </div>
                    <ScrollAnimation>
                    <div className="body-head-mid">
                        <p>Explore an array of features that elevate your <span>Productivity</span> to new heights</p>
                    </div>
                    </ScrollAnimation>
                    <div className="body-head-bottom">
                        <span>Discover the tools that revolutionise the way you manage and optimize your operations</span>
                    </div>
                </div>

                <div className="body-body">
                    <div className="body-body-cross-platform">
                        <ScrollAnimation>
                        <div className="cross-platform">
                                <div className="emoticon">
                                    <CiMobile2/>
                                </div>
                                <span>
                                    Cross-Platform Compatibility
                                </span>
                                <p>
                                Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.
                                </p>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="body-body-stay-informed">
                        <ScrollAnimation>
                        <div className="stay-informed">
                                <div className="emoticon">
                                    <GoBell/>
                                </div>
                                <span>
                                    Stay Informed with Essential Notifications
                                </span>
                                <p>
                                Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.
                                </p>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="body-body-secure-data">
                        <ScrollAnimation>
                        <div className="secure-data">
                                <div className="emoticon">
                                    <GoFlame/>
                                </div>
                                <span>
                                    Secure Data Encryption at all Times
                                </span>
                                <p>
                                Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.
                                </p>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="body-bottom">
                    <div className="body-bottom-left">
                        <div className="gitlab" style={{ transform: `translateY(-${scrollPosition-3852}px)` }}>
                            
                            <img src={gitlab} alt="git"/>
                        </div>
                        <div className="gmail" style={{ transform: `translateY(-${scrollPosition-3852}px)` }}>
                            <img src={gmail} alt="gmail" />
                        </div>
                    </div>
                    <div className="body-bottom-center">
                            <div className="body-bottom-center-top">
                                <FaHammer color="blueviolet"/>
                                <span>INTEGRATIONS</span>
                            </div>
                            <ScrollAnimation>
                            <div className="body-bottom-center-mid">
                                <p>
                                Enable <span>integration</span> with other popular tools and platforms
                                </p>
                            </div>
                            </ScrollAnimation>
                            <div className="body-bottom-center-bottom">
                                <span>
                                Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                                </span>
                            </div>
                            <div className="body-bottom-center-bottommost">
                                <ScrollAnimation>
                                <img src={connectapp} alt="connect app"/>
                                </ScrollAnimation>
                            </div>
                    </div>
                    <div className="body-bottom-right">
                    <div className="slack" style={{ transform: `translateY(-${scrollPosition-3852}px)` }}>
                            <img src={slack} alt="slack"/>
                        </div>
                        <div className="dropbox" style={{ transform: `translateY(-${scrollPosition-3852}px)` }}>
                            <img src={dropbox} alt="dropbox"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Body