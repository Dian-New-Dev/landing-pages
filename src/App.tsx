import React, {useState, useRef, useEffect} from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import ScrollMarker from "./componentes/ScrollMarker";
import Repertorio from "./componentes/Repertorio";
import Valores from "./componentes/Valores";
import Contato from "./componentes/Contato";


const App: React.FC = () => {

    //controlar destaque do marcador de scroll
    const [scrollIndex, setScrollIndex] = useState<number>(1)


    return (
        <div className="max-w-[1400px] border static">

            <Topbar setScrollIndex={setScrollIndex} />
            
            <div id="scroller-horizontal" className="no-scrollbar escala snap-x snap-mandatory snap-always overflow-y-auto flex items-center gap-32 w-full">
                <div id="hero" className="snap-center flex items-center justify-center border p-0 xl:p-24 2xl:py-[10%] min-w-full h-full lg:h-screen">
                    <Hero setScrollIndex={setScrollIndex} />    
                </div>
                
                <div id="repertorio" className="snap-center flex items-center justify-center border 2xl:py-[10%] min-w-full h-full md:h-[50%] lg:h-screen">
                    <Repertorio />   
                </div>   

                <div id="valores" className="snap-center flex items-center justify-center border py-[10%] min-w-full h-full lg:h-screen">
                    <Valores /> 
                </div> 

                <div id="contato" className="snap-center flex items-center justify-center border py-[10%] min-w-full h-full lg:h-screen">
                    <Contato />
                </div>     
            </div>
            

            <ScrollMarker scrollIndex={scrollIndex} setScrollIndex={setScrollIndex} />

            <Footer />
        </div>
    );
}

export default App;