import React from "react";

interface props {
    setScrollIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Hero: React.FC<props> = ({setScrollIndex}) => {

    function destacarMarcador(numero:number) {
        setScrollIndex(numero)
    }


    return (
        <div id="hero" className=" flex items-end gap-4 font-medium">
            <div className="p-4 border-t border-l border-gray-600/50 w-1/2 text-white flex flex-col gap-6 items-start">
                <h1 className="text-5xl font-bold">
                    Landing Page: o poder do marketing virtual
                    a um click de distância.
                </h1>

                <h2 className="text-2xl font-bold">
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
                    <button onClick={() => destacarMarcador(2)} className="font-bold rounded-lg px-5 py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600">
                        <a href="#repertorio">
                            <p>Conferir nosso repertório <span className="text-[#d63b67]">➤</span></p>
                        </a>
                    </button>

                    <a href="#contato">
                        <button onClick={() => destacarMarcador(4)} className="font-bold rounded-lg px-5 py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600">Fazer um orçamento <span className="fonte-padrao">☎</span> </button>
                    </a>

                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="text-lime-700 font-bold text-xl">✓</span><p className="ml-[-10px]">Orçamento sem compromisso</p>
                    <span className="text-lime-700 font-bold text-xl">✓</span><p className="ml-[-10px]">Preços extremamente acessíveis</p>
                </div>
            </div>

            <div className="pr-4 border-b border-r border-gray-600/50 relative w-[50%] h-full">
                <img className="w-[100%] brightness-90" src={`./assets/images/hero.png`} alt="Imagem de mulher sorridente usando óculos de realidade virtual interagindo com telas holográficas flutando ao seu redor" />

            </div>
        </div>
    );
}

export default Hero;