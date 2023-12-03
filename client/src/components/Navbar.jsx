import "../styles/Navbar.css"
import logo from "../assets/logo.webp"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Header1 from "./Header1.jsx";
import Header2 from "./Header2.jsx";
import Body from "./Body";
import Faq from "./Faq";
import Pricing from "./Pricing";
import Footer from "./Footer";


//Navbar of the website
const Navbar = () => {

  const [hamburgerShow, setHamburgurShow] = useState(false);
  return (
    <>
    <div className="header">
    
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
                  <a href="#features">Features</a>
                  
                </div>
                
                <div className="nav-option-duplicate">
                <a href="#faq">FAQ</a>
                  
                </div>
                
                <div className="nav-option-duplicate">
                <a href="#pricing">Pricing</a>
                  
                </div>
                
                
                <div className="nav-option-duplicate">
                <a href="#testimonials">Testimonials</a>
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
                <a href="#features">Features</a>
                  <span className="dot"></span>
                </div>
                
                <div className="nav-option2">
                <a href="#faq">FAQ</a>
                  <span className="dot"></span>
                </div>
                
                <div className="nav-option3">
                <a href="#pricing">Pricing</a>
                  <span className="dot"></span>
                </div>
                
                
                <div className="nav-option4">
                <a href="#testimonials">Testimonials</a>
                  </div>
                <div className="nav-btn">
                Buy Template
                 </div>

            
          </div>
      
        </div>
    </div>
    }
    <Header1/>
    <section id="features">
      <Header2/>
    </section>
    </div>

    <Body/>
    <section id="faq">
      <Faq/>
    </section>
    <section id="pricing">
      <Pricing/>
    </section>
    <div className="footer">
    <section id="testimonials">
      <Footer/>
    </section>
    </div>
    </>
  )
}

export default Navbar