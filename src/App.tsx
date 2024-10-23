import React from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
const App: React.FC = () => {
    return (
        <div className="max-w-[1400px] m-auto">

            <Topbar />

            <Hero />
        </div>
    );
}

export default App;