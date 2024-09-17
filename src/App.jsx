import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features.jsx";
import Collaboration from "./components/Collaboration";
import HowToUse from "./components/HowToUse.jsx";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
    return (
        <div>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Routes>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/features" element={<Features/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/services" element={<HowToUse/>}/>
                    <Route path="/roadmap" element={<Roadmap/>}/>
                </Routes>
                <Footer/>
            </div>
            <ButtonGradient/>
        </div>
    );
};

export default App;
