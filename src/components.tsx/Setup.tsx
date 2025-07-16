import "./Setup.css"
import { useEffect, useState, type JSX } from 'react'

function Setup(): JSX.Element {
    const [batteries, setBatteries] = useState(-1)

    return (
        <div className="SetupDiv">
            <div className="SetupElement"><label>Batteries:</label> <input placeholder="5" type="number" /></div>
            <div className="SetupElement"><label>Serial:</label> <input placeholder="FU4N4C3" type="text" /></div>
        </div>
    );
};


export default Setup;