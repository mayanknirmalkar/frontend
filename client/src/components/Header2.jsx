//Importing the necessary icons, css files and images
import { IoMdFlame } from "react-icons/io";
import "../styles/Header2.css"
import { FaStar } from "react-icons/fa";
import sitmap from "../assets/sitemap-img.webp"
import analytics from "../assets/analytics.webp"
import easycommunication from "../assets/easycommunication.webp";
import scheduling from "../assets/scheduling.webp"
import ScrollAnimation from "./ScrollAnimation";

const Header2 = () => {
  return (
        <div className="inclusive-header2" >
            
            <div className="header2-wrapper">

                    <div className="top-wrapper">
                            <div className="premier">
                                <span><IoMdFlame color="orange"/>PREMIER FEATURES</span>
                            </div>
                            <div className="title-wrap">
                                <ScrollAnimation>
                                <p>Discover our product's <span>Capabilities</span></p>
                                </ScrollAnimation>
                            </div>
                            <div className="description">
                                <p>Don't settle for mediocrity - embrace the future of management with Manage Wise</p>
                            </div>
                    </div>
                    <ScrollAnimation>
                    <div className="mid-wrapper">
                        
                        <div className="header2-left">
                            
                                <span>
                                    <FaStar color="gold"/>
                                </span>
                                <p>
                                    Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                                </p>
                        </div>
                        
                        
                        <div className="header2-right">
                            <div className="box-wrapper">

                                    <div className="img-wrap">
                                             <img src={sitmap} alt="smart-management"/>
                                    </div>
                            
                                    <div className="text-wrap">
                                        <p>Smart Task Management</p> 
                                        <span>
                                            Say goodbye to chaos with our smart task management system
                                        </span>
                                    </div>
                            
                            </div>
        
                        </div>
                        
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="bottom-wrapper">
                        
                            <div className="scheduling">
                                <img src={scheduling} alt="scheduling"/>
                                <p>Flexible Scheduling</p>
                                <span>Stay productive with our flexible scheduling system</span>
                            </div>
                            
                            <div className="easycommunication">
                                <img src={easycommunication} alt="easycommunication"/>
                                <p>Easy Communication</p>
                                <span>Collaborate seamlessly with your team in real-time</span>
                            </div>
                           
                            <div className="analytics">
                                <img src={analytics} alt="analytics"/>
                                <p>Analytics</p>
                                <span>Gain valuable insights with our advanced analytics feature</span>
                            </div>
                            
                    </div>
                    </ScrollAnimation>
            </div>

        </div>
  )
}

export default Header2