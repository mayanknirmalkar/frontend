import "../styles/Navbar.css"
import logo from "../assets/logo.webp"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

//Navbar of the website
const Navbar = () => {

  const [hamburgerShow, setHamburgurShow] = useState(false);
  return (
    <>
    { hamburgerShow ? 


      <div className="inclusive-nav-duplicate">
        <div className="nav-wrapper-duplicate">
            <div className="nav-img-duplicate">
                <img src={logo} alt="logo"/>
               <p>ManageWise</p> 
            </div>

            <div className="hamburger" onClick={()=>setHamburgurShow(!hamburgerShow)}>
             {
              hamburgerShow ? <RxCross1 size={40}/> : <GiHamburgerMenu size={40}/>
             } 
            </div>
          </div>
          <div className="options-wrapper-duplicate">
            

                <div className="nav-option-duplicate">
                  Features
                  
                </div>
                
                <div className="nav-option-duplicate">
                  FAQ
                  
                </div>
                
                <div className="nav-option-duplicate">
                  Pricings
                  
                </div>
                
                
                <div className="nav-option-duplicate">
                  Testimonials
                  </div>
                <div className="nav-btn-duplicate">
                Buy Template
                 </div>

            
          </div>
      
        
    </div>


      :
   
    <div className="inclusive-nav">
        <div className="nav-wrapper">
            <div className="nav-img">
                <img src={logo} alt="logo"/>
               <p>ManageWise</p> 
            </div>

            <div className="hamburger" onClick={()=>setHamburgurShow(!hamburgerShow)}>
              <GiHamburgerMenu size={40}/>
            </div>
 
          <div className="options-wrapper">
            

                <div className="nav-option1">
                  Features
                  <span className="dot"></span>
                </div>
                
                <div className="nav-option2">
                  FAQ
                  <span className="dot"></span>
                </div>
                
                <div className="nav-option3">
                  Pricings
                  <span className="dot"></span>
                </div>
                
                
                <div className="nav-option4">
                  Testimonials
                  </div>
                <div className="nav-btn">
                Buy Template
                 </div>

            
          </div>
      
        </div>
    </div>
    }

    </>
  )
}

export default Navbar