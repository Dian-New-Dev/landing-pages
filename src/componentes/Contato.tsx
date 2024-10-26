import React from "react";

const Contato: React.FC = () => {
    return (
        <div className="sm:scale-[0.6] md:scale-[1] w-full h-full flex justify-center items-center">
            <div className="border border-gray-600/50 bg-cyan-900/25 rounded-[40px] w-[320px] py-[5%] xl:py-0 xl:h-[400px] flex flex-col justify-center gap-8 p-4">
                <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-2xl text-white">Obrigado pela Visita!</h3>
                    <p className="text-gray-300 text-center">Caso queira estabelecer contato, sinta-se
                        livre para usar um dos seguintes canais:
                    </p>
                </div>

                <div className="flex gap-4 justify-center items-center">
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/diego-antunes-339648293/">
                            <img className="w-[50px] border rounded-[50px] border-gray-600 hover:scale-110" src={`./assets/icons/linkedin.png`} alt="Ícone do linkedin" />
                        </a>
                    </div>

                    <div>
                        <a target="_blank" href="https://github.com/Dian-New-Dev">
                            <img className="w-[50px] border rounded-[50px] border-gray-600 hover:scale-110" src={`./assets/icons/github.png`} alt="Ícone do Github" />
                        </a>
                    </div>

                    <div>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5567991592199&text=Ol%C3%A1,%20seja%20bem%20vindo!%20Caso%20tenha%20interesse%20em%20adquirir%20uma%20Landing%20Page%20para%20o%20seu%20neg%C3%B3cio,%20ou%20tenha%20d%C3%BAvidas%20sobre%20meus%20servi%C3%A7os,%20sinta-se%20livre%20para%20mandar%20uma%20mensagem.%20Responderei%20o%20quanto%20antes!">
                            <img className="w-[50px] border rounded-[50px] border-gray-600 hover:scale-110" src={`./assets/icons/whatsapp.png`} alt="Ícone do WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;