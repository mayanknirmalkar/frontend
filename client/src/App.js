import Navbar from "./components/Navbar";
import "./App.css";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Body from "./components/Body";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


function App() {
  return (
  
      <>
        
        <div className="header">
        <Navbar/>
        <Header1/>
        </div>
        <Header2/>
        <Body/>
        <Faq/>
        <Pricing/>
        <div className="footer">
        <Footer/>
        </div>
      </>
     
  );
}

export default App;
