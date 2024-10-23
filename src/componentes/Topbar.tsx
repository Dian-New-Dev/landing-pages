import React from "react";
import Logo from "./Logo";

const Topbar: React.FC = () => {
    return (
        <div className="absolute top-0 left-0  text-white font-bold py-2 px-8 flex items-center w-full bg-stone-950/50 border-b border-gray-500/50">
            <div className="w-1/2">
                <img className="w-[75px]" src="./assets/images/logo.png" alt="" />
            </div>

            <div className="w-1/2 flex justify-end gap-4 pr-6">
                <a href="">Contato</a>
                <a href="">Portfolio</a>
            </div>
        </div>
    );
}

export default Topbar;