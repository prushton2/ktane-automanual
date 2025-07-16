import "./Setup.css"
import { useEffect, useState, type JSX } from 'react'

function Setup({ onChange }: { onChange: (batteries: number, serialNumber: string) => void }): JSX.Element {
    const [batteries, setBatteries] = useState(-1)
    const [serialNumber, setSerialNumber] = useState("")

    useEffect(() => {
        onChange(batteries, serialNumber)
    }, [batteries, serialNumber])

    return (
        <div className="SetupDiv">
            <div className="SetupElement"><label>Batteries:</label> <input placeholder="5" type="number" onChange={(e) => setBatteries(e.target.valueAsNumber)} /></div>
            <div className="SetupElement"><label>Serial:</label> <input placeholder="FU4N4C3" type="text" onChange={(e) => setSerialNumber(e.target.value)} /></div>
        </div>
    );
};


export default Setup;