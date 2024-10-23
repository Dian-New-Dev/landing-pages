import React, { useState, useEffect } from "react";
import valores from "../data/valores";

const Valores: React.FC = () => {

    const [renderizar, setRenderizar] = useState<JSX.Element[]>([])
    
    useEffect(() => {
        mapearPlanos()   
    }, [])

    function mapearPlanos() {
        const valoresMapeados = valores.map((valor, index) => {
            return (
            <div key={index} className="bg-cyan-900/25 w-1/3 border border-gray-500 px-8 leading-5 py-8 rounded-[16px]">
                <div className="flex flex-col items-center gap-5">
                    <div className="flex  items-center gap-2 justify-center">
                        <p className="text-4xl font-medium">{valor.tipo}</p>
                        <img className="w-[40px]" src={valor.icone} alt="Ícone de braço forte" />
                    </div>

                    <div className="w-1/2 bg-green-500 text-center rounded-[30px]">
                        <p>{valor.preco}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-300 font-medium">
                        {valor.inclui.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <div className="w-[90%] flex gap-2">
                                    <p className="text-lime-600 font-bold">✓</p>
                                    <p>{item.item}</p>
                                </div>

                                <div className="w-[10%] text-right">
                                    <img src={`./assets/icons/information.png`} title={item.legenda} alt="Ícone de exclamação" />
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="font-bold rounded-lg px-5 py-3 bg-cyan-500 border border-white/25 hover:scale-105 hover:bg-cyan-600">Adquirir</button>
                </div>
            </div>
            )
        });
        setRenderizar(valoresMapeados)
    }
   

    return (
        <div className="px-32 text-white flex flex-col gap-4">
            <h3 className="text-5xl">Escolha seu plano</h3>

            <div className="flex gap-16">
                {renderizar}
            </div>

            <div className="relative p-4">
                <p className="">Independente do plano, ao adquirir uma Landing Page,
                    nossso clientes também levam, gratuitamente:
                </p>

                <div className="w-full grid gap-2 grid-valores p-2">
                    <div className="w-full border border-gray-600 rounded-lg bg-cyan-900/25 text-gray-300 text-sm items-center flex gap-2 item-grid1">
                        <div className="flex items-center w-1/2 p-2 gap-1">
                            <p className="text-lime-600 text-lg font-bold">✓</p>
                            <p>Opção de domínio gratuito</p>
                        </div>
                        <img className="w-[20px] h-[20px]" src={`./assets/icons/information.png`} alt="Ícone de informação"
                            title="Sem custo com o formato: 'github.io/nome-do-seu-site/'" />
                    </div>

                    <div className="w-full border border-gray-600 rounded-lg bg-cyan-900/25 text-gray-300 text-sm items-center flex gap-2 item-grid2">
                        <div className="flex items-center w-1/2 p-2 gap-1">
                            <p className="text-lime-600 text-lg font-bold">✓</p>
                            <p>Opção de hospedagem gratuita</p>
                        </div>
                        <img className="w-[20px] h-[20px]" src={`./assets/icons/information.png`} alt="Ícone de informação"
                            title="Hospedagem veloz, confiável e gratuita com o serviço Github Pages (onde a presente página está hospedada)." />
                    </div>
                    <div className="w-full border border-gray-600 rounded-lg bg-cyan-900/25 text-gray-300 text-sm items-center flex gap-2 item-grid3">
                        <div className="flex items-center w-1/2 p-2 gap-1">
                            <p className="text-lime-600 text-lg font-bold">✓</p>
                            <p>Garantia de responsividade</p>
                        </div>
                        <img className="w-[20px] h-[20px]" src={`./assets/icons/information.png`} alt="Ícone de informação"
                            title="Seu site funcionando em qualquer dispositivo e qualquer tamanho de tela." />
                    </div>

                    <div className="w-full border border-gray-600 rounded-lg bg-cyan-900/25 text-gray-300 text-sm items-center flex gap-2 item-grid4">
                        <div className="flex items-center w-1/2 p-2 gap-1">
                            <p className="text-lime-600 text-lg font-bold">✓</p>
                            <p>Otimização de SEO</p>
                        </div>
                        <img className="w-[20px] h-[20px]" src={`./assets/icons/information.png`} alt="Ícone de informação"
                            title="Aplicamos as melhores técnicas de ranquamento para que sua Landing Page apareça nas pesquisas google." />
                    </div>
                </div>

                <div id="margem" className="absolute top-0 left-0 w-full h-full flex">
                    <div className="w-1/2 border-t border-l border-gray-600/50"></div>
                    <div className="w-1/2 border-b border-r border-gray-600/50"></div>

                </div>
            </div>


        </div>
    );
}

export default Valores;