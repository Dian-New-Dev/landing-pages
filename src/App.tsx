import React from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
const App: React.FC = () => {
    return (
        <div className="max-w-[1400px] m-auto">

            <Topbar />
            <div className="no-scrollbar escala snap-x snap-mandatory overflow-x-auto flex gap-32  w-full">
                <div className="snap-center flex-shrink-0 w-[100%]">
                    <Hero />    
                </div>
                
                <div className="snap-center flex-shrink-0 w-[100%]">
                    <Hero />    
                </div>
                   

                   
            </div>
            

            <Footer />
        </div>
    );
}

export default App;