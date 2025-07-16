import "./Button.css";
import "../global.css";
import { useEffect, useState, type JSX } from 'react';
import type { Indicators } from "./Setup";
import { colors } from "../global";

function Button({ batteries, indicators }: { batteries: number, indicators: Indicators }): JSX.Element {
    const [label, setLabel] = useState("")
    const [color, setColor] = useState("")
    const [strip, setStrip] = useState("")

    useEffect(() => {
        console.log(label, color, strip)
    }, [label, color, strip])

    const labels: string[] = ["Abort", "Detonate", "Hold", "Other"]

    function solve(): string {
        function solveStrip(color: string): string {
            if (color == "Blue") {
                return "Release when the timer has a 4 in any position"
            }
            if (color == "Yellow") {
                return "Release when the timer has a 5 in any position"
            }
            return "Release when the timer has a 1 in any position"
        }

        function releaseHeldStrip(): string {
            if (strip == "") {
                return "Press and hold button, then select the strip color"
            }
            return `If you have a ${strip} strip, then ${solveStrip(strip)}`

        }

        if (color == "" || label == "") {
            return "Select a color and label"
        }

        if (color == "Blue" && label == "Abort") {
            return releaseHeldStrip()
        }

        if (batteries > 1 && label == "Detonate") {
            return "Press and immediately release the button"
        }

        if (color == "White" && indicators.lit.CAR) {
            return releaseHeldStrip()
        }

        if (batteries > 2 && indicators.lit.FRK) {
            return "Press and immediately release the button"
        }

        if (color == "Yellow") {
            return releaseHeldStrip()
        }

        if (color == "Red" && label == "Hold") {
            return "Press and immediately release the button"
        }

        return releaseHeldStrip()


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
                            onClick={() => {
                                if (e == label) {
                                    setLabel("")
                                } else {
                                    setLabel(e)
                                }
                            }}
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
                            onClick={() => {
                                if (e == color) {
                                    setColor("")
                                } else {
                                    setColor(e)
                                }
                            }}
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
            <div>
                <label>{solve()}</label>
            </div>
        </>

    );
};


export default Button;