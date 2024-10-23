import React from "react";

interface ScrollMarkerProps {
    scrollIndex: number;   
}
    


const ScrollMarker: React.FC<ScrollMarkerProps> = ({scrollIndex}) => {



    return (
        <div className="flex gap-2 justify-center w-full absolute bottom-[50px] mx-auto centralizar-absoluto">
                        <div className={`${scrollIndex === 0 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}></div>
                        <div className={`${scrollIndex === 1 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}></div>
                        <div className={`${scrollIndex === 2 ? 'bg-gray-500' : 'bg-transparent'} border-2 border-gray-500 scrollMarker-forma w-[10px] h-[10px]`}></div>
        </div>
    );
}

export default ScrollMarker;