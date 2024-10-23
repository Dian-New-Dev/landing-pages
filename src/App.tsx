import React, {useState} from "react";
import Glasmorfismo from "./componentes/Glasmorfismo";
import NeonBoxes from "./componentes/NeonBoxes";
import GetImg from "./componentes/GetImg";

const App: React.FC = () => {

    const [index] = useState<number>(3)

    return (
        <div>
            {index === 1 && <Glasmorfismo />}

            {index === 2 && <NeonBoxes />}

            {index === 3 && <GetImg />}
            
        </div>
    );
}

export default App;