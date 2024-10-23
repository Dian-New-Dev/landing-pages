import React from "react";

const Hero: React.FC = () => {
    return (
        <div id="hero" className="flex font-medium">
            <div className="w-1/2 text-white flex flex-col gap-6 items-start">
                <h1 className="text-5xl font-bold">
                    Landing Page: o poder do marketing virtual
                    a um click de distância.
                </h1>

                <h2 className="text-2xl font-bold">
                    Adicione uma Landing Page ao seu conjunto
                    de ferramentas para captar clientes.
                </h2>

                <p className="text-gray-300">
                    O emprego de Landing Pages permite apresentar
                    informações relevantes sobre seu produto ou serviço
                    de forma concisa, ágil e focada: em segundos o visitante
                    sabe o que você vende, a qualidade do seu serviço e as formas
                    de contato.
                </p>
                <p className="text-gray-300">
                    Mais customizável do que grandes plataformas, mais
                    profissional do que redes sociais e mais barato
                    do que um website clássico, a Landing Page é sua aliada
                    para o crescimento dos seus negócios.
                </p>
                <div className="flex flex-col gap-2">
                    <button className="font-bold rounded-lg px-5 py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600">Conferir nosso repertório →</button>
                    <button className="font-bold rounded-lg px-5 py-3 bg-green-500 border border-white/25 hover:scale-105 hover:bg-green-600">Fazer um orçamento ☎ </button>
                </div>

                <div className="flex gap-2 text-sm text-gray-400">
                    <p>✓ Orçamento sem compromisso</p>
                    <p>✓ Preços extremamente acessíveis</p>
                </div>
            </div>

            <div className="w-1/2">

            </div>
        </div>
    );
}

export default Hero;