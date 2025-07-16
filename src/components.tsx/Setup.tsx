import "./Setup.css"
import { useEffect, useState, type JSX } from 'react'

export interface Indicators { 
    lit: { 
        CAR: boolean;
        FRK: boolean;
    }; 
}

function Setup({ onChange }: { onChange: (batteries: number, serialNumber: string, indicators: Indicators) => void }): JSX.Element {
    const [batteries, setBatteries] = useState(-1)
    const [serialNumber, setSerialNumber] = useState("")
    const [indicators, setIndicators] = useState<Indicators>({lit: {CAR: false, FRK: false}})

    useEffect(() => {
        onChange(batteries, serialNumber, indicators)
    }, [batteries, serialNumber])

    return (
        <div className="SetupDiv">
            <div className="SetupElement">
                <label>Batteries:</label>
                <input placeholder="5" type="number" onChange={(e) => setBatteries(e.target.valueAsNumber)} />
            </div>
            <div className="SetupElement">
                <label>Serial:</label>
                <input placeholder="FU4N4C3" type="text" onChange={(e) => setSerialNumber(e.target.value)} />
            </div>
            <div className="SetupElement">
                <label>Lit CAR Indicator:</label>
                <input
                    type="checkbox"
                    checked={indicators.lit.CAR}
                    onChange={(e) => setIndicators(prev => ({
                        ...prev,
                        lit: { ...prev.lit, CAR: e.target.checked }
                    }))}
                />
            </div>
            <div className="SetupElement">
                <label>Lit FRK Indicator:</label>
                <input
                    type="checkbox"
                    checked={indicators.lit.FRK}
                    onChange={(e) => setIndicators(prev => ({
                        ...prev,
                        lit: { ...prev.lit, FRK: e.target.checked }
                    }))}
                />
            </div>
        </div>
    );
};


export default Setup;