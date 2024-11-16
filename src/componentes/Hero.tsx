import React from "react";
import heroImg from '../assets/images/hero.png';
import phoneIcon from '../assets/icons/call.png'

interface props {
    setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Hero: React.FC<props> = ({setScrollIndex}) => {

    function destacarMarcador(numero:number) {
        setScrollIndex(numero)
    }


    return (
        <div id="hero" className="z-10 relative scale-[1] sm:scale-[0.45] md:scale-[0.6] lg:scale-[0.8] xl:scale-[1.1] flex items-end gap-2 2xl:gap-4 font-medium sm:p-32 md:p-24 2xl:p-0">
            <div className="z-10 p-8 py-16 sm:py-0 sm:p-2 md:p-4 2xl:p-4 sm:border-t sm:border-l border-gray-600/50  w-full sm:w-1/2 text-white flex flex-col gap-3 md:gap-6 items-start">
                <h1 className="text-3xl sm:text-2xl md:text-3xl 2xl:text-5xl font-bold">
                    Landing Page: o poder do marketing virtual
                    a um click de distância.
                </h1>

                <h2 className="2xl:text-2xl font-bold">
                    Adicione uma Landing Page ao seu conjunto
                    de ferramentas para captar clientes.
                </h2>


                <p className="text-gray-300">
                    Mais customizável do que grandes plataformas, mais
                    profissional do que redes sociais e mais barato
                    do que um website clássico, a Landing Page é a aliada perfeita 
                    para o crescimento dos seus negócios.
                </p>


                <div className="flex flex-col gap-2">
                    <button onClick={() => destacarMarcador(2)} className="font-bold rounded-lg p-1 2xl:px-5 2xl:py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600">
                        <a href="#repertorio">
                            <p>Conferir nosso repertório <span className="text-[#d63b67]">➤</span></p>
                        </a>
                    </button>

                    <a href="#contato">
                        <button onClick={() => destacarMarcador(4)} className="font-bold rounded-lg p-1 2xl:px-5 2xl:py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600 flex gap-1 items-center">Fazer um orçamento
                            <img className="w-[17px]" src={phoneIcon} alt="Ícone de Telefone" />
                        </button>
                    </a>

                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="text-lime-700 font-bold text-xl">✓</span><p className="sm:ml-[-10px]">Orçamento sem compromisso</p>
                    <span className="text-lime-700 font-bold text-xl">✓</span><p className="sm:ml-[-10px]">Preços extremamente acessíveis</p>
                </div>
            </div>

            <div className="z-0 absolute md:static top-[100px] left-0 sm:relative sm:pr-4 sm:border-b sm:border-r border-gray-600/50 w-full sm:w-[50%] h-full">
                <img className="opacity-25 md:opacity-100 origin-top scale-[2] md:scale-[1] sm:static sm:w-[100%] brightness-90" src={heroImg} alt="Imagem de mulher sorridente usando óculos de realidade virtual interagindo com telas holográficas flutando ao seu redor" />

            </div>
        </div>
    );
}

export default Hero;