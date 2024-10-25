import React, {useState} from "react";

const ScrollMarker: React.FC = () => {

    const [scrollIndex, setScrollIndex] = useState<number>(1)

    function destacarMarker (numero:number) {
        setScrollIndex(numero)
    }

    return (
        <div className="scale-150 flex gap-2 justify-center w-full absolute bottom-[50px] mx-auto centralizar-absoluto">
                        <div className={`${scrollIndex === 1 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                            <button onClick={() => destacarMarker(1)}>
                            
                                <a className="w-full h-full opacity-100" href="#hero">a</a>

                            </button>
                        </div>
                        <div className={`${scrollIndex === 2 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                            <button onClick={() => destacarMarker(2)}>
                            
                                <a className="w-full h-full opacity-100" href="#repertorio">a</a>

                            </button>

                        </div>
                        <div className={`${scrollIndex === 3 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}>
                            <button onClick={() => destacarMarker(3)}>
                            
                                <a className="w-full h-full opacity-100" href="#valores">a</a>

                            </button>

                        </div>
        </div>
    );
}

export default ScrollMarker;