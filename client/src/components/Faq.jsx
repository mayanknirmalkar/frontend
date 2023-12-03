//importing icons, images and css files and also the scroll animation file
import { BsPersonRaisedHand } from "react-icons/bs";
import "../styles/Faq.css";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import ScrollAnimation from "./ScrollAnimation";


const Faq = () => {
    //the states below are named based on the last name of the paragraphs of answers, basically these are being used to open the divs of questions to see answers
    const [showOffer, setShowOffer] = useState(false);
    const [showAlike, setShowAlike] = useState(false);
    const [showPlatforms, setShowPlatforms] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showWise, setShowWise] = useState(false);

  return (
    <div className="inclusive-faq">
        <div className="faq-top-wrapper">
            <div className="faq-top-top">
                <span><BsPersonRaisedHand color="gold"/> FAQ</span>
            </div>
            <div className="faq-top-mid">
                <ScrollAnimation>
                <p>Need <span>Answers?</span></p>
                </ScrollAnimation>
            </div>
            <div className="faq-top-bottom">
                <span>Check out our most commonly asked questions below to find the information you need</span>
            </div>
        </div>
        <ScrollAnimation>
        <div className="faq-bottom-wrapper">
            {   
                showOffer ? <div className="offer-true">
                    <div className="offer-true-heading">What is Manage Wise and what does it offer?<i><IoMdClose color="blueviolet" onClick={()=>setShowOffer(false)}/></i></div>
                    <p>Manage Wise is a comprehensive management platform desgned to streamline your business opearations , enhance, productivity and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more </p>
                    </div> : <div className="offer-false"><span>What is Manage Wise and what does it offer?</span><i><IoIosAdd color="blueviolet" onClick={()=>setShowOffer(true)}/></i></div>
            }
            {
                showAlike ? <div className="offer-true">
                <div className="offer-true-heading">Is Manage Wise suitable for smaller businesses and larger enterprises alike?<i><IoMdClose color="blueviolet" onClick={()=>setShowAlike(false)}/></i></div>
                <p>Manage Wise is a comprehensive management platform desgned to streamline your business opearations , enhance, productivity and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more </p>
                </div> : <div className="offer-false"><span>Is Manage Wise suitable for smaller businesses and larger enterprises alike?</span><i><IoIosAdd color="blueviolet" onClick={()=>setShowAlike(true)}/></i></div>
            }
            {
                showPlatforms ? <div className="offer-true">
                <div className="offer-true-heading">Can I access Manage Wise from different devices and platforms?<i><IoMdClose color="blueviolet" onClick={()=>setShowPlatforms(false)}/></i></div>
                <p>Manage Wise is a comprehensive management platform desgned to streamline your business opearations , enhance, productivity and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more </p>
                </div> : <div className="offer-false"><span>Can I access Manage Wise from different devices and platforms?</span><i><IoIosAdd color="blueviolet" onClick={()=>setShowPlatforms(true)}/></i></div>
            }
            {
                showUsers ? <div className="offer-true">
                <div className="offer-true-heading">What kind of support options do you offer to users?<i><IoMdClose color="blueviolet" onClick={()=>setShowUsers(false)}/></i></div>
                <p>Manage Wise is a comprehensive management platform desgned to streamline your business opearations , enhance, productivity and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more </p>
                </div> : <div className="offer-false"><span>What kind of support options do you offer to users?</span><i><IoIosAdd color="blueviolet" onClick={()=>setShowUsers(true)}/></i></div>
            }
            {
                 showWise ? <div className="offer-true">
                 <div className="offer-true-heading">How secure is the data stored in Manage Wise?<i><IoMdClose color="blueviolet" onClick={()=>setShowWise(false)}/></i></div>
                 <p>Manage Wise is a comprehensive management platform desgned to streamline your business opearations , enhance, productivity and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more </p>
                 </div> : <div className="offer-false"><span>How secure is the data stored in Manage Wise?</span><i><IoIosAdd color="blueviolet" onClick={()=>setShowWise(true)}/></i></div>
            }
        </div>
        </ScrollAnimation>
    </div>
  )
}

export default Faq