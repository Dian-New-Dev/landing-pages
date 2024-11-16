import React, {useEffect, useState} from "react";
import logoImg from '../assets/images/logo.png'

interface HeaderMobileProps {
    larguraDaTela: number;
}

const TopBarHamburguer: React.FC<HeaderMobileProps> = ({larguraDaTela}) => {

    //o seguinte código cuida de usar a prop para dinamicamente
    //definir a posição left do painel hamburguer escondido
    //à esquerda da margem esquerda
    
    const [hamburguerAberto, setHamburguerAberto] = useState(false);

    function abrirMenu() {
        if (hamburguerAberto) {
            setHamburguerAberto(false)
        } else {
            setHamburguerAberto(true)
        }

    }

    const posicaoEsquerda = hamburguerAberto ? 0 : -larguraDaTela;

    //o seguinte código cuida de detectar que o usuário rolou a página
    //para baixo para aplicar leve sombreamento no header

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        console.log('useEffect chamada: sim')
        const seRolarScroll = () => {
            console.log('função chamada: não')
            if (window.scrollY > 50) {
                console.log('if chamado: não')
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
                console.log('else chamado: não');
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);
    

    return (
        <div className="relative">
            <div className={`z-50 w-full fixed top-0 left-0 px-8 py-5 b`}>
                <button onClick={abrirMenu} className='z-10 flex flex-col gap-2'>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                    <div className='z-50 w-8 h-0.5 bg-sky-200'></div>
                </button>

            <img className='z-40 px-8 py-5 absolute top-0 right-0 w-[100px] scale-[1]' src={logoImg} alt="Logo da empresa" />

                <div 
                className={`z-40 absolute w-full h-screen top-0 left-0 flex flex-col gap-5 p-8 pt-20 bg-gray-800/100 font-bold hamburguer-transition`}
                style={{left: `${posicaoEsquerda}px` }}
                >
                    <a onClick={abrirMenu} className='z-40 text-xl font-normal text-white' href="#hero">Início</a>
                    <a onClick={abrirMenu} className='z-40 text-xl font-normal text-white' href="#repertorio">Portfolio</a>
                    <a onClick={abrirMenu} className='z-40 text-xl font-normal text-white' href="#valores">Valores</a>
                    <a onClick={abrirMenu} className='z-40 text-xl font-normal text-white' href="#contato">Contato</a>
                </div>

            </div> 

            <div id='problem' className={`z-40 w-full fixed top-0 left-0 p-8 transicao-gradiente ${rolouScroll ? 'gradiente' : 'gradiente'}`}></div>
        </div>
    );
}

export default TopBarHamburguer;