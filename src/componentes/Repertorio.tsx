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
        setListaThumbs([])
        if (tagADestacar.length === 0) { //se nenhuma tag selecionada, renderiza todas thumbs
            paginas.forEach((item) => {
                setListaThumbs(prev => {
                    return [... prev, item.thumbnail]
                })
            })
        } else { // se tags selecionadas, fitra thumbs que tenham as tags
            const thumbsPuras = new Set<string>();
            paginas.forEach((item) => {
                item.tags.forEach((item2) => {
                    if (tagADestacar.includes(item2)) {
                            thumbsPuras.add(item.thumbnail)
                    }
                })
            });
            const thumbsFiltradas: string[] = Array.from(thumbsPuras)
            setListaThumbs(thumbsFiltradas)
        }

    },[tagADestacar])

    // logica para renderizar lp da thumbnail clicada

    const [srcLP, setSrcLP] = useState<string>()

    function handleThumbClick(src:string) {
        paginas.forEach((item) => {
            
                if (item.thumbnail === src) {
                    setSrcLP(item.link)
                }
            
        })
        
    }

    useEffect(() => {
        console.log(srcLP)
    }, [srcLP])


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
                                <button key={index} onClick={() => handleThumbClick(item)}>
                                    <img key={index} src={item} alt="Thumbnail clicável para visualizar landing page" />    
                                </button>
                            ))}  
                        </div>

                        <div id="scroll-buttons" className="flex flex-col justify-around">
                            
                            
                            <img className="w-[20px] h-[20px] hover:scale-110 " src={`./assets/icons/arrow.png`} alt="" />

                            
                            
                            <img className="w-[20px] h-[20px] pointer-events-auto hover:scale-110  rotate-180" src={`./assets/icons/arrow.png`} alt="" />
                        </div>
                    </div>

                    <p>Filtrar por tags:</p>

                    
                    <div id="tags" className="grid-responsivo-tags p-2 gap-2">
                        {tagsFiltradas.map((item: string, index: number) => (
                            <button key={index} onClick={() => handleClickedTag(item)} className={`p-1 ${tagADestacar.includes(item) ? 'bg-cyan-600 font-normal' : 'bg-cyan-900 font-thin'}  rounded-lg`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div id="painel-direito" className={`background-placeholder  relative w-[60%] p-4`}>
                        {!srcLP && (
                             <div className="absolute top-0 left-0 h-full flex flex-col gap-2 justify-center items-center w-full p-16 text-center">

                                <p className={``}>Selecione uma miniatura ao lado para visualizá-la aqui.</p>
                                <p className="italic text-sm text-gray-300"> Algumas páginas podem não renderizar corretamente neste formato. Para uma 
                                visualização adequada, clique no botão "Visitar" para acessar a página diretamente.
                                </p>
                            </div>

                            
                        )}

                    
                    <iframe id="sites-iframe" className={`${srcLP !== '' ? 'block' : 'hidden'} static w-full h-full`} src={srcLP}></iframe>

                    {srcLP && (<a className=" absolute bottom-10 right-10 bg-green-600 p-2 rounded-lg pointer-events-auto opacity-50 hover:opacity-100" target="_blank" href={srcLP}>
                        Visitar
                    </a>
                    )}
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