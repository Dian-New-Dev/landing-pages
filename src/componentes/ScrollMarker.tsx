import React from "react";
import flechaIcon from '../assets/icons/flecha.png'

interface props {
    scrollIndex: number;
    setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
    clicouSeta: (direcao: string) => void;
}

const ScrollMarker: React.FC<props> = ({scrollIndex, setScrollIndex, clicouSeta }) => {

    function destacarMarker (numero:number) {
        setScrollIndex(numero)
    }

    return (
        <div className="z-50 hidden sm:flex gap-2 justify-center w-full absolute bottom-[30px] xl:bottom-[50px] mx-auto centralizar-absoluto">
            <div className="absolute bottom-6 w-full h-full flex items-center justify-center gap-2">

                <button onClick={() => clicouSeta("esq")}>
                   <img className="w-[30px] scale-[1] hover:scale-[1.1] rotate-180" src={flechaIcon} alt="Ícone de flecha apontando para a esquerda." />
                </button>

                <button onClick={() => clicouSeta("dir")}>
                    <img className="w-[30px] scale-[1] hover:scale-[1.1]" src={flechaIcon} alt="Ícone de flecha apontando para a direita." />
                </button>

            </div>
                        
            <div className={`${scrollIndex === 1 ? 'bg-gray-500' : 'bg-transparent'} hidden border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                <button onClick={() => destacarMarker(1)}>
                
                    <a className="w-full h-full opacity-100" href="#hero">a</a>

                </button>
            </div>
            <div className={`${scrollIndex === 2 ? 'bg-gray-500' : 'bg-transparent'} hidden border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                <button onClick={() => destacarMarker(2)}>
                
                    <a className="w-full h-full opacity-100" href="#repertorio">a</a>

                </button>

            </div>
            <div className={`${scrollIndex === 3 ? 'bg-gray-500' : 'bg-transparent'} hidden border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                <button onClick={() => destacarMarker(3)}>
                
                    <a className="w-full h-full opacity-100" href="#valores">a</a>

                </button>

            </div>

            <div className={`${scrollIndex === 4 ? 'bg-gray-500' : 'bg-transparent'} hidden border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                <button onClick={() => destacarMarker(4)}>
                
                    <a className="w-full h-full opacity-100" href="#contato">a</a>

                </button>

            </div>
        </div>
    );
}

export default ScrollMarker;