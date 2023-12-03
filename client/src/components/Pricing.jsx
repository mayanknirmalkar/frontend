import "../styles/Pricing.css";
import { FaDollarSign } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import ScrollAnimation from "./ScrollAnimation";

const Pricing = () => {
  return (
    <div className="inclusive-pricing">
        <div className="pricing-top-wrapper">
            <div className="pricing-top-top">
                 <FaDollarSign color="green"/>
                <span>  PRICING</span>
            </div>
            <ScrollAnimation>
            <div className="pricing-top-mid">
                
                <p>Select your ideal <span>Pricing</span> plan</p>
               
            </div>
            </ScrollAnimation>
            <div className="pricing-top-bottom">
                <span>At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</span> 
            </div>
        </div>
        <ScrollAnimation>
        <div className="pricing-bottom-wrapper">
                
                <div className="pricing-bottom-left">
                    <div className="pricing-bottom-left-top">
                        <span>FREE</span>
                    </div>
                    <div className="pricing-bottom-left-mid">
                        <p>$0</p>
                        <span>/month</span>
                    </div>
                    <div className="pricing-bottom-left-bottom">
                        <span><TiTick color="green"/>Access to all basic features</span>
                        <span><TiTick color="green"/>Reporting and analytics</span>
                        <span><TiTick color="green"/>Up to 5 individual users</span>
                        <span><TiTick color="green"/>Chat and email support</span>
                    </div>
                    <div className="pricing-bottom-left-bottommost">
                        <span>Get started</span>
                    </div>
                </div>
                
                <div className="pricing-bottom-mid">
                    <div className="pricing-bottom-left-top">
                        <span>STANDARD</span>
                    </div>
                    <div className="pricing-bottom-left-mid">
                        <p>$25</p>
                        <span>/month</span>
                    </div>
                    <div className="pricing-bottom-left-bottom">
                        <span><TiTick color="green"/>Access to all basic features</span>
                        <span><TiTick color="green"/>Reporting and analytics</span>
                        <span><TiTick color="green"/>Up to 5 individual users</span>
                        <span><TiTick color="green"/>Chat and email support</span>
                        <span><TiTick color="green"/>3+ integrations</span>
                        <span><TiTick color="green"/>Account performance reporting</span>
                    </div>
                    <div className="pricing-bottom-mid-bottommost">
                    <span>Get started</span>
                    </div>
                </div>
                
                <div className="pricing-bottom-left">
                    <div className="pricing-bottom-left-top">
                        <span>BUSINESS</span>
                    </div>
                    <div className="pricing-bottom-left-mid">
                        <p>$42</p>
                        <span>/month</span>
                    </div>
                    <div className="pricing-bottom-left-bottom">
                    <span><TiTick color="green"/>Access to all basic features</span>
                        <span><TiTick color="green"/>Reporting and analytics</span>
                        <span><TiTick color="green"/>Up to 5 individual users</span>
                        <span><TiTick color="green"/>Chat and email support</span>
                        <span><TiTick color="green"/>3+ integrations</span>
                    </div>
                    <div className="pricing-bottom-left-bottommost">
                    <span>Get started</span>
                    </div>
                </div>
        </div>
        </ScrollAnimation>
    </div>
  )
}

export default Pricing