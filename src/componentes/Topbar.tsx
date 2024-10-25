import React from "react";

interface props {
    setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Topbar: React.FC<props> = ({setScrollIndex}) => {

    function destacarMarker (numero:number) {
        setScrollIndex(numero)
    }

    return (
        <div className="absolute top-0 left-0  text-white font-bold py-2 px-8 flex items-center w-full bg-stone-950/50 border-b border-gray-500/50">
            <div className="w-1/2">
            <button onClick={() => destacarMarker(1)}>
                <a href="#hero">
                    <img className="w-[75px]" src="./assets/images/logo.png" alt="Logo da Empresa 'DA Web Dev'" />
                </a>
            </button>
                
                
            </div>

            <div className="w-1/2 flex justify-end gap-4 pr-6">
                <button onClick={() => destacarMarker(2)}>
                    <a className="hover:text-cyan-200 hover:underline" href="#repertorio">Portfólio</a>
                </button>

                <button onClick={() => destacarMarker(3)}>
                    <a className="hover:text-cyan-200 hover:underline" href="#valores">Valores</a>
                </button>

                <button onClick={() => destacarMarker(4)}>
                    <a className="hover:text-cyan-200 hover:underline" href="#contato">Contato</a>
                </button>
                
                
            </div>
        </div>
    );
}

export default Topbar;