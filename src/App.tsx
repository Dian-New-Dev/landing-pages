import React from "react";
import Topbar from "./componentes/Topbar";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
const App: React.FC = () => {
    return (
        <div className="max-w-[1400px] m-auto">

            <Topbar />

            <Hero />

            <Footer />
        </div>
    );
}

export default App;