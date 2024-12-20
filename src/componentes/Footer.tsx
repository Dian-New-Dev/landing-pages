import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="flex justify-center w-full absolute bottom-0 sm:bottom-[-5px] xl:bottom-0 mx-auto centralizar-absoluto">
            <div className="scale-[0.7] xl:scale-[1] bg-black/50 p-2 px-16 formato-footer-div">
                <p className="text-gray-500 text-sm font-bold">Diego Antunes - 2024</p>
            </div>
        </div>
    );
}

export default Footer;