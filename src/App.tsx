import React, {useState, useRef, useEffect} from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import ScrollMarker from "./componentes/ScrollMarker";
import Repertorio from "./componentes/Repertorio";
import Valores from "./componentes/Valores";


const App: React.FC = () => {

    return (
        <div className="max-w-[1400px] m-auto">

            <Topbar />
            
            <div id="scroller-horizontal" className="no-scrollbar escala snap-x snap-mandatory snap-always overflow-y-auto flex items-center gap-32  w-full">
                <div id="hero" className="snap-center  min-w-full h-full">
                    <Hero />    
                </div>
                
                <div id="repertorio" className="snap-center  min-w-full h-full">
                    <Repertorio />   
                </div>   

                <div id="valores" className="snap-center  min-w-full h-full">
                    <Valores /> 
                </div>      
            </div>
            

            <ScrollMarker />

            <Footer />
        </div>
    );
}

export default App;