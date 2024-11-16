import React, { useEffect, useState } from "react";
import paginas from "../data/paginas";
import arrowIcon from '../assets/icons/arrow.png'

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


    //logica para scrollar painel de thumbnails
    const [scroll, setScroll] = useState<HTMLElement | null>()
    useEffect(() => {
        const scrollDivVert = document.getElementById('miniaturas-wrapper') as HTMLElement | null;
        setScroll(scrollDivVert)
    }, [])

    function clicouSetasVerticais(direcao:string) {
        if (direcao === 'up') {
            if (scroll) {
                scroll.scrollBy({
                    top: -50,
                    behavior: 'smooth'
                });
            }

        } else {
            if (scroll) {
                scroll.scrollBy({
                    top: 50,
                    behavior: 'smooth'
                });
            }

        }   
    }


    return (
        <div className="sm:scale-[0.35] md:scale-[0.55] lg:scale-[0.75] xl:scale-[0.95] 2xl:scale-[1] relative h-full rounded-[50px] p-8 xl:p-24 2xl:p-4 text-white  flex flex-col justify-center gap-2">
            <div className="z-10 relative flex flex-col gap-2 ">
                <h3 className=" text-2xl sm:text-5xl font-bold">Nosso Repertório</h3>
                <p className="text-gray-300">Landing Pages desenvolvidas com vários estilos,
                    diversas ferramentas e  inúmeras tecnologias,
                    mas uma única prioridade: qualidade de experiência
                    do usuário. 
                </p>


            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-16 sm:gap-4 h-full md:h-[400px] lg:h-[75%] bg-[#222a35]/50 border border-gray-600/50 rounded-[40px] p-2">
                <div id="painel-esquerdo" className="relative w-full sm:w-[40%] sm:p-4 flex flex-col sm:border-r border-gray-600/50 gap-4 h-[600px] md:h-full ">
                        <div id="scroll-buttons" className="absolute top-[40%] right-0 hidden sm:flex flex-col justify-around">
                            
                            <button onClick={() => clicouSetasVerticais('up')} className="mb-2">
                                <img className="pointer-events-auto w-[20px] h-[20px] hover:scale-110 " src={arrowIcon} alt="Flecha apontando para cima." />
                            </button>

                            <button onClick={() => clicouSetasVerticais('down')} className="mb-2">
                                <img className="pointer-events-auto w-[20px] h-[20px] hover:scale-110  rotate-180" src={arrowIcon} alt="Flecha apontando para baixo." />
                            </button>
                            
                        </div>
                    <div id="miniaturas-wrapper" className="flex gap-4 border-b h-full sm:h-[50%] no-scrollbar border-gray-600/50 overflow-x-scroll sm:overflow-x-hidden sm:overflow-y-scroll ">
                        
                        <div id="miniaturas-padrao" className="hidden sm:grid grid-responsivo-thumbs  w-full   no-scrollbar gap-4 p-2">
                            {listaThumbs.map((item: string, index: number) => (
                                <button key={index} className="" onClick={() => handleThumbClick(item)}>
                                        <img className="w-[100%]" key={index} src={item} alt="Thumbnail clicável para visualizar landing page" />    

                                </button>
                            ))}  
                        </div>
                        
                        
                        <div id="miniaturas-mobile" className="flex sm:hidden sm:h-full w-full   no-scrollbar gap-4 p-2">
                            {listaThumbs.map((item: string, index: number) => (
                                <button key={index} className="min-w-full" onClick={() => handleThumbClick(item)}>
                                    <a className="block sm:hidden" target="_blank" href={srcLP}>
                                        <img className="w-[100%]" key={index} src={item} alt="Thumbnail clicável para visualizar landing page" />    
                                    </a>
                                </button>
                            ))}  
                        </div>

                    </div>

                    <div id="tags" className="grid-responsivo-tags p-2 gap-2  sm:h-1/2">
                        {tagsFiltradas.map((item: string, index: number) => (
                            <button key={index} onClick={() => handleClickedTag(item)} className={`p-1 ${tagADestacar.includes(item) ? 'bg-cyan-600 font-normal' : 'bg-cyan-900 font-thin'}  rounded-lg`}>
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div id="painel-direito" className={`hidden sm:block background-placeholder h-full  relative w-full sm:w-[60%] p-4`}>
                        {!srcLP && (
                             <div className="absolute top-0 left-0 sm:h-full flex flex-col gap-2 justify-center items-center w-full sm:p-16 text-center">

                                <p className={`hidden sm:block`}>Selecione uma miniatura ao lado para visualizá-la aqui.</p>
                                <p className={`block sm:hidden`}>Selecione uma miniatura acima para visualizá-la aqui.</p>
                                <p className="italic text-sm text-gray-300"> Algumas páginas podem não renderizar corretamente neste formato. Para uma 
                                visualização adequada, clique no botão "Visitar" para acessar a página diretamente.
                                </p>
                            </div>

                            
                        )}

                    
                    <iframe id="sites-iframe" className={`${srcLP !== '' ? 'block' : 'hidden'} static w-full h-full`} src={srcLP}></iframe>

                    {srcLP && (<a className="hidden sm:block absolute bottom-10 right-10 bg-green-600 p-2 rounded-lg pointer-events-auto opacity-50 hover:opacity-100" target="_blank" href={srcLP}>
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