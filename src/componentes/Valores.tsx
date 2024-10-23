import React from "react";

const Valores: React.FC = () => {
    return (
        <div className="px-32 border text-white flex flex-col gap-16">
            <h3 className="text-5xl">Escolha seu plano</h3>

            <div className="flex gap-16">
                <div className="bg-cyan-900/25 w-1/3 border border-gray-500 px-8 leading-5 py-12 rounded-[16px]">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex  items-center gap-2 justify-center">
                            <p className="text-4xl font-medium">Básico</p>
                            <img className="w-[40px]" src={`./assets/icons/muscle.png`} alt="Ícone de braço forte" />
                        </div>

                        <div className="w-1/2 bg-green-500 text-center rounded-[30px]">
                            <p>R$ 199,99</p>
                        </div>

                        <div className="flex flex-col gap-2 text-gray-300 font-medium">
                            <div className="flex justify-between">
                                <div className="w-[90%] flex gap-2">
                                    <p className="text-lime-600 font-bold">✓</p>
                                    <p>1 Landing Page</p>
                                </div>

                                <div className="w-10% text-right">
                                    !!
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>3 Meses de Atualização</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Manutenção Técnica Vitalícia</p>
                            </div>
                            
                                
                                

                        </div>

                        <button className="font-bold rounded-lg px-5 py-3 bg-cyan-500 border border-white/25 hover:scale-105 hover:bg-cyan-600">Adquirir</button>
                    </div>
                </div>

                <div className="bg-cyan-900/25 w-1/3 border border-gray-500 px-8 leading-5 py-12 rounded-[16px]">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex items-center gap-2 justify-center">
                            <p className="text-4xl font-medium">Médio</p>
                            <img className="w-[40px]" src={`./assets/icons/star.png`} alt="Ícone de braço forte" />
                        </div>

                        <div className="w-1/2 bg-green-500 text-center rounded-[30px]">
                            <p>R$ 299,99</p>
                        </div>

                        <div className="flex flex-col gap-2 text-gray-300 font-medium">
                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>1 Landing Page</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>6 Meses de Atualização</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Manutenção Técnica Vitalícia</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Até 3 revisões pós-entrega</p>
                            </div>
                            
                                
                                

                        </div>

                        <button className="font-bold rounded-lg px-5 py-3 bg-cyan-500 border border-white/25 hover:scale-105 hover:bg-cyan-600">Adquirir</button>
                    </div>
                </div>

                <div className="bg-cyan-900/25 w-1/3 border border-gray-500 px-8 leading-5 py-12 rounded-[16px]">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex items-center gap-2 justify-center">
                            <p className="text-4xl font-medium">Avançado</p>
                            <img className="w-[40px]" src={`./assets/icons/startup.png`} alt="Ícone de braço forte" />
                        </div>

                        <div className="w-1/2 bg-green-500 text-center rounded-[30px]">
                            <p>R$ 399,99</p>
                        </div>

                        <div className="flex flex-col gap-2 text-gray-300 font-medium">
                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>1 Landing Page</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>12 Meses de Atualização</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Manutenção Técnica Vitalícia</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Até 7 revisões pós-entrega</p>
                            </div>

                            <div className="flex gap-2">
                                <p className="text-lime-600 font-bold">✓</p>
                                <p>Otimização Google Negócios</p>
                            </div>


                            
                                
                                

                        </div>

                        <button className="font-bold rounded-lg px-5 py-3 bg-cyan-500 border border-white/25 hover:scale-105 hover:bg-cyan-600">Adquirir</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Valores;