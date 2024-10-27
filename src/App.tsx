import React, {useState, useRef, useEffect} from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import ScrollMarker from "./componentes/ScrollMarker";
import Repertorio from "./componentes/Repertorio";
import Valores from "./componentes/Valores";
import Contato from "./componentes/Contato";
import TopBarHamburguer from "./componentes/TopBarHamburguer";


const App: React.FC = () => {

    //o seguinte código cuida de selecionar entre menu desktop
    //e hamburguer, dependendo do tamanho da tela

    const [abriuNoMobile, setAbriuNoMobile] = useState<boolean>(false);
    const [larguraDaTela, setLarguraDaTela] = useState<number>(document.documentElement.clientWidth)

    useEffect(() => {
        function definirFormatodoHeader() {
            if (document.documentElement.clientWidth < 639) {
                setAbriuNoMobile(true);
            } else {
                setAbriuNoMobile(false)
            }
            
            setLarguraDaTela(document.documentElement.clientWidth)
        }



        //chama a função na primeira renderização, equivale a um "onload"
        definirFormatodoHeader();

        //chama a função se o viewport tiver o tamanho alterado
        window.addEventListener('resize', definirFormatodoHeader);

        //limpa o listener (não sei pq é necessáriom mas é)
        return () => {
            window.removeEventListener('resize', definirFormatodoHeader)
        }


        
    }, []); 

    //se menu desktop, variavel para
    //controlar destaque do marcador de scroll
    const [scrollIndex, setScrollIndex] = useState<number>(1)


    return (
        <div className="max-w-[1400px] max-h-[1440px] flex justify-center items-center  static">

            {!abriuNoMobile && <Topbar setScrollIndex={setScrollIndex} />}
            
            {abriuNoMobile && <TopBarHamburguer larguraDaTela={larguraDaTela} />}

            
            <div id="scroller-horizontal" className="sm:no-scrollbar sm:escala sm:snap-x sm:snap-mandatory sm:snap-always overflow-x-hidden sm:overflow-x-auto sm:overflow-y-auto flex flex-col sm:flex-row items-center gap-16 sm:gap-32 w-full max-h-[1440px]">
                <div id="hero" className="snap-center flex items-center justify-center p-0 xl:p-24 2xl:py-[10%] min-w-full h-full lg:h-screen max-h-[1440px]">
                    <Hero setScrollIndex={setScrollIndex} />    
                </div>
                
                <div id="repertorio" className="snap-center flex items-center justify-center 2xl:py-[10%] min-w-full h-full md:h-[50%] lg:h-screen max-h-[1440px]">
                    <Repertorio />   
                </div>   

                <div id="valores" className="snap-center flex items-center justify-center  py-[10%] min-w-full h-full lg:h-screen max-h-[1440px]">
                    <Valores /> 
                </div> 

                <div id="contato" className="snap-center flex items-center justify-center  py-[10%] min-w-full h-full lg:h-screen max-h-[1440px]">
                    <Contato />
                </div>     
            </div>
            

            <ScrollMarker scrollIndex={scrollIndex} setScrollIndex={setScrollIndex} />

            <Footer />
        </div>
    );
}

export default App;