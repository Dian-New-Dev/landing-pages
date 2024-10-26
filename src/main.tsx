import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='overflow-hidden p-32 flex flex-col items-center justify-center  gap-4 relative z-10 h-screen w-full bg-gradient-to-tr from-[#1a1f1b] from-10% via-[#1f2229] via-75% to-[#203b28] to-100%'>
            <App />
        </div>
        
    </React.StrictMode>  
);
