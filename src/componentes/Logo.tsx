import React from "react";

const Logo: React.FC = () => {
    return (
        <div className={`escala-logo grid place-items-center text-white`}>
            <div id='logo-container' className='flex  w-40 h-28'>
                <div className='w-full border '>
                    <p className='acme-regular text-[120px] mt-[-33px]'>D</p>
                </div>
                <div className='flex flex-col w-full '>
                    <div className='h-20 '>
                    <p className='acme-regular text-[100px] mt-[-33px]'>A</p>
                    </div>
                    <div className=''>
                        <p className='acme-regular pl-2'>Web Dev</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Logo;