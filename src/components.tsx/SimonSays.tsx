import "./SimonSays.css"
import "../global.css";
import { useEffect, useState, type JSX } from 'react';
import type { Indicators } from "./Setup";
import { colors } from "../global";

interface AnswerMap {
    Red: string,
    Blue: string,
    Green: string,
    Yellow: string
}

export default function SimonSays({ serialNumber }: { serialNumber: string }): JSX.Element {
    const [strikes, setStrikes] = useState(0)
    const [answerMap, setAnswerMap] = useState<AnswerMap>({ Red: "Blue", Blue: "Red", Green: "Yellow", Yellow: "Green" })
    const [pattern, setPattern] = useState<string[]>([])

    function solve(clickedColor: string) {
        setPattern(
            [...pattern, clickedColor]
        )
    }

    useEffect(() => {
        let vowel = /[AEIOUaeiou]/i.test(serialNumber)
        let ansmap: AnswerMap | undefined

        switch (strikes) {
            case 0:
                if (vowel) {
                    ansmap = {
                        Red: "Blue",
                        Blue: "Red",
                        Green: "Yellow",
                        Yellow: "Green"
                    }
                } else {
                    ansmap = {
                        Red: "Blue",
                        Blue: "Yellow",
                        Green: "Green",
                        Yellow: "Red"
                    }
                }
            break;
            case 1:
                if (vowel) {
                    ansmap = {
                        Red: "Yellow",
                        Blue: "Green",
                        Green: "Blue",
                        Yellow: "Red"
                    }
                } else {
                    ansmap = {
                        Red: "Red",
                        Blue: "Blue",
                        Green: "Yellow",
                        Yellow: "Green"
                    }
                }
            break;
            case 2:
                if (vowel) {
                    ansmap = {
                        Red: "Green",
                        Blue: "Red",
                        Green: "Yellow",
                        Yellow: "Blue"
                    }
                } else {
                    ansmap = {
                        Red: "Yellow",
                        Blue: "Green",
                        Green: "Blue",
                        Yellow: "Red"
                    }
                }
            break;
        }

        if(ansmap != undefined) {
            setAnswerMap(ansmap)
        }

        setPattern([])

    }, [serialNumber, strikes])

    return <div className="SSComponent">
        <div className="SSStrikeSelect">
            <label className="SSStrikeLabel">Strikes:</label>
            <button
                className={`SSStrikeButton ${strikes === 0 ? "SSStrikeSelected" : ""}`}
                onClick={() => setStrikes(0)}
            >
                0
            </button>
            <button
                className={`SSStrikeButton ${strikes === 1 ? "SSStrikeSelected" : ""}`}
                onClick={() => setStrikes(1)}
            >
                1
            </button>
            <button
                className={`SSStrikeButton ${strikes === 2 ? "SSStrikeSelected" : ""}`}
                onClick={() => setStrikes(2)}
            >
                2
            </button>
        </div>
        <div className="SSButtonPanelDiv">
            <div className="SSButtonPanel">
                <div className="SSButtonPanel2">
                    <button onClick={() => solve("Blue")} className="SSButton SSButtonBlue"></button>
                    <button onClick={() => solve("Yellow")} className="SSButton SSButtonYellow"></button>
                </div>
                <div className="SSButtonPanel2">
                    <button onClick={() => solve("Red")} className="SSButton SSButtonRed"></button>
                    <button onClick={() => solve("Green")} className="SSButton SSButtonGreen"></button>
                </div>
            </div>
        </div>
        <div className="SSAnswerDiv">
            {pattern.map((e) => {
                let answer = answerMap[e as keyof AnswerMap]
                return <label className={`SSAnswer SSButton${answer}`}></label>
            })}
        </div>
    </div>
}