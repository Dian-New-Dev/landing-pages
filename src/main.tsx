import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='px-32 pt-40 flex flex-col gap-4 relative z-10 h-screen w-screen bg-gradient-to-tr from-[#1a1f1b] from-10% via-[#1f2229] via-75% to-[#203b28] to-100%'>
            <App />
        </div>
        
    </React.StrictMode>  
);
