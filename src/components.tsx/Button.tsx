import "./Button.css";
import "../global.css";
import { useEffect, useState, type JSX } from 'react';
import type { Indicators } from "./Setup";

function Button({ batteries, indicators }: { batteries: number, indicators: Indicators}): JSX.Element {
    const [label, setLabel] = useState("")
    const [color, setColor] = useState("")
    const [strip, setStrip] = useState("")

    useEffect(() => {
        console.log(label, color, strip)
    }, [label, color, strip])

    const labels: string[] = ["Abort", "Detonate", "Hold", "Other"]
    const colors: string[] = ["Red", "Green", "Blue", "Yellow", "White", "Black"]

    function solveStrip(color: string): string {
        if (color == "Blue") {
            return "Release when the timer has a 4 in any position"
        }
        if (color == "Yellow") {
            return "Release when the timer has a 5 in any position"
        }
        return "Release when the timer has a 1 in any position"
    }

    function solve(): string {
        if (color == "Blue" && label == "Abort") {
            if (strip == "") {
                return "Press and hold button, then select the strip color"
            }
            return `If you have a ${strip} strip, then ${solveStrip(strip)}`
        }

        if(batteries > 1 && label == "Detonate") {
            return "Press and immediately release the button"
        }

        if(color == "White" && indicators.lit.CAR) {
            if (strip == "") {
                return "Press and hold button, then select the strip color"
            }
            return `If you have a ${strip} strip, then ${solveStrip(strip)}`
        }

        if(batteries > 2 && indicators.lit.FRK) {
            return "Press and immediately release the button"
        }

        if(color == "Yellow") {
            if (strip == "") {
                return "Press and hold button, then select the strip color"
            }
            return `If you have a ${strip} strip, then ${solveStrip(strip)}`
        }

        if (strip == "") {
            return "Press and hold button, then select the strip color"
        }
        return `If you have a ${strip} strip, then ${solveStrip(strip)}`

    }


    return (
        <>
            <div className="ButtonComponent">
                <div className="ButtonLabelPicker">
                    <label>Select the Button's Label</label>
                    {labels.map((e) => {
                        return <button
                            key={`button.label.${e}`}
                            className={`WireButton ${label == e ? "Red" : "Empty"}`}
                            onClick={() => setLabel(e)}
                        >
                            {e}
                        </button>
                    })}
                </div>
                <div className="ButtonColorPicker">
                    <label>Select the Button's Color</label>
                    {colors.map((e) => {
                        return <button
                            key={`button.color.${e}`}
                            className={`WireButton ${e == color ? e : "Empty"}`}
                            onClick={() => setColor(e)}
                        >
                            {e}
                        </button>

                    })}
                </div>
                <div className="ButtonStripPicker">
                    <label>Select the Strip's Color</label>
                    {colors.map((e) => {
                        return <button
                            key={`strip.color.${e}`}
                            className={`WireButton ${e == strip ? e : "Empty"}`}
                            onClick={() => { 
                                if (e == strip) { 
                                    setStrip("") 
                                } else { 
                                    setStrip(e) 
                                } 
                            }}
                        >
                            {e}
                        </button>

                    })}
                </div>
            </div>
            <div className="ButtonComponent">
                    {solve()}
            </div>
        </>

    );
};


export default Button;