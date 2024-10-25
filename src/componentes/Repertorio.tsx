import React, { useEffect, useState } from "react";
import paginas from "../data/paginas";

const Repertorio: React.FC = () => {
    
    //gerar tags
    const tagsPuras = new Set<string>();
    
    paginas.forEach((item) => {
        item.tags.forEach((item2) => {
            tagsPuras.add(item2)
        })

    })
    const tagsFiltradas: string[] = Array.from(tagsPuras);

    // renderizar tags direto no jsx

    // logica para processar click nas tags
    
    const [tagADestacar, setTagADestacar] = useState<string[]>([])

    function handleClickedTag(tag:string) {
        setTagADestacar((prev) => {
            if (!prev.includes(tag)) {
                return [...prev, tag];
            } else {
                return prev.filter((item) => item !== tag);
            }
        });
        
    }

    //logica para renderizar thumbnails

    const [listaThumbs, setListaThumbs] = useState<string[]>([])

    useEffect(() => {
        paginas.forEach((item) => {
            setListaThumbs(prev => {
                return [... prev, item.thumbnail]
            })
        })
    },[tagADestacar])




    useEffect(() => {
        console.log(listaThumbs)
    }, [listaThumbs])









    return (
        <div className="relative h-full rounded-[50px] p-4 text-white  flex flex-col gap-2">
            <div className="z-10 relative flex flex-col gap-2 ">
                <h3 className="text-5xl font-bold">Nosso Repertório</h3>
                <p className="text-gray-300">Landing Pages desenvolvidas com vários estilos,
                    diversas ferramentas e  inúmeras tecnologias,
                    mas uma única prioridade: qualidade de experiência
                    do usuário. 
                </p>


            </div>

            <div className="relative z-10 flex gap-4 h-full bg-[#222a35]/50 border border-gray-600/50 rounded-[40px] p-2">
                <div id="painel-esquerdo" className="w-[40%] p-4 flex flex-col border-r border-gray-600/50 gap-4 h-full">
                    <div id="miniaturas-wrapper" className="flex gap-4 border-b border-gray-600/50">
                        <div id="miniaturas" className="grid-responsivo-thumbs h-[300px] w-full overflow-y-scroll no-scrollbar gap-4 p-2">
                            {listaThumbs.map((item: string, index: number) => (
                                
                                <img key={index} src={item} alt="Thumbnail clicável para visualizar landing page" />    
                            ))}  
                        </div>

                        <div id="scroll-buttons" className="flex flex-col justify-around">
                            
                            
                            <img className="w-[20px] h-[20px] hover:scale-110 " src={`./assets/icons/arrow.png`} alt="" />

                            
                            
                            <img className="w-[20px] h-[20px] pointer-events-auto hover:scale-110  rotate-180" src={`./assets/icons/arrow.png`} alt="" />
                        </div>
                    </div>

                    
                    <div id="tags" className="grid-responsivo-tags p-2 gap-4">
                        {tagsFiltradas.map((item: string, index: number) => (
                            <button key={index} onClick={() => handleClickedTag(item)} className={`p-1 ${tagADestacar.includes(item) ? 'border scale-110' : 'border-0 scale-100'} bg-cyan-600 rounded-lg`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div id="painel-direito" className="w-[60%] p-4">
                <iframe id="sites-iframe" className="w-full h-full" src="https://dian-new-dev.github.io/LPT-3/"></iframe>

                </div>
            </div>

            <div id="margem" className="absolute z-0 top-0 left-0 w-full h-full flex">
                    <div className="w-1/2 border-t border-l border-gray-600/50"></div>
                    <div className="w-1/2 border-b border-r border-gray-600/50"></div>

                </div>
        </div>
    );
}

export default Repertorio;