import React from "react";

const Repertorio: React.FC = () => {
    return (
        <div className="relative h-full rounded-[50px] p-4 text-white  flex flex-col gap-2">
            <div className="relative flex flex-col gap-2 ">
                <h3 className="text-5xl font-bold">Nosso Repertório</h3>
                <p className="text-gray-300">Landing Pages desenvolvidas com vários estilos,
                    diversas ferramentas e  inúmeras tecnologias,
                    mas uma única prioridade: qualidade de experiência
                    do usuário. 
                </p>


            </div>

            <div className="flex gap-4 h-full bg-[#222a35]/50 border border-gray-600/50 rounded-[40px] p-2">
                <div id="painel-esquerdo" className="w-[40%] p-4 flex flex-col border-r border-gray-600/50 gap-4 h-full">
                    <div id="miniaturas-wrapper" className="flex gap-4 border-b border-gray-600/50">
                        <div id="miniaturas" className="grid-responsivo-thumbs h-[300px] w-full overflow-y-scroll no-scrollbar gap-4 p-2">
                            
                        </div>

                        <div id="scroll-buttons" className="flex flex-col justify-around">
                            <img className="w-[20px] h-[20px] hover:scale-110 " src={`./assets/icons/arrow.png`} alt="" />

                            
                            
                            <img className="w-[20px] h-[20px] pointer-events-auto hover:scale-110  rotate-180" src={`./assets/icons/arrow.png`} alt="" />
                        </div>
                    </div>

                    
                    <div id="tags" className="grid-responsivo-tags p-2 gap-4">
                        <button className="p-1 bg-cyan-600 rounded-lg">Tag1</button>
                        <button className="p-1 bg-green-600 rounded-lg">Tag2</button>
                        <button className="p-1 bg-red-600 rounded-lg">Tag3</button>
                        <button className="p-1 bg-amber-600 rounded-lg">Tag4</button>
                        <button className="p-1 bg-blue-600 rounded-lg">Tag5</button>
                    </div>
                </div>
                
                <div id="painel-direito" className="w-[60%] p-4">
                <iframe id="sites-iframe" className="w-full h-full" src="https://dian-new-dev.github.io/LPT-3/"></iframe>

                </div>
            </div>

            <div id="margem" className="absolute top-0 left-0 w-full h-full flex">
                    <div className="w-1/2 border-t border-l border-gray-600/50"></div>
                    <div className="w-1/2 border-b border-r border-gray-600/50"></div>

                </div>
        </div>
    );
}

export default Repertorio;