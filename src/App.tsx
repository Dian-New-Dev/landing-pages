import React, {useState} from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import ScrollMarker from "./componentes/ScrollMarker";
import Repertorio from "./componentes/Repertorio";
import Valores from "./componentes/Valores";


const App: React.FC = () => {

    const [scrollIndex, setScrollIndex] = useState<number>(0)

    return (
        <div className="max-w-[1400px] m-auto">

            <Topbar />
            
            <div id="scroller-horizontal" className="no-scrollbar escala snap-x snap-mandatory overflow-x-auto flex gap-32  w-full">
                <div className="snap-center flex-shrink-0 w-[100%]">
                    <Hero />    
                </div>
                
                <div className="snap-center flex-shrink-0 w-[100%]">
                    <Repertorio />   
                </div>   

                <div className="snap-center flex-shrink-0 w-[100%]">
                    <Valores /> 
                </div>      
            </div>
            

            <ScrollMarker scrollIndex={scrollIndex} />

            <Footer />
        </div>
    );
}

export default App;