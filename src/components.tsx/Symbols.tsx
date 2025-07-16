import "./Symbols.css"
import { useState, type JSX } from "react"

function Symbols(): JSX.Element {
    const [highlightedSymbols, setHighlightedSymbols] = useState<HightlightedSymbols>(defaultHighlightedSymbols)

    const symbols: string[][] = [
        [
            "28-balloon.png",
            "13-at.png",
            "30-upsidedowny.png",
            "12-squigglyn.png",
            "7-squidknife.png",
            "9-hookn.png",
            "23-leftc.png"
        ],
        [
            "16-euro.png",
            "28-balloon.png",
            "23-leftc.png",
            "26-cursive.png",
            "3-hollowstar.png",
            "9-hookn.png",
            "20-questionmark.png"
        ],
        [
            "1-copyright.png",
            "8-pumpkin.png",
            "26-cursive.png",
            "5-doublek.png",
            "15-meltedthree.png",
            "30-upsidedowny.png",
            "3-hollowstar.png"
        ],
        [
            "11-six.png",
            "21-paragraph.png",
            "31-bt.png",
            "7-squidknife.png",
            "5-doublek.png",
            "20-questionmark.png",
            "4-smileyface.png"
        ],
        [
            "24-pitchfork.png",
            "4-smileyface.png",
            "31-bt.png",
            "23-leftc.png",
            "21-paragraph.png",
            "19-dragon.png",
            "2-filledstar.png"
        ],
        [
            "11-six.png",
            "16-euro.png",
            "27-tracks.png",
            "14-ae.png",
            "24-pitchfork.png",
            "18-nwithhat.png",
            "6-omega.png"
        ]
    ]

    return <div className="SymbolsDiv">
        {symbols.map((e, index) => {
            return <div key={`symbols.column[${index}]`} className="SymbolColumn">
                {e.map((i, symIndex) => {
                    let key = parseInt(i)
                    return <img
                        key={`symbols[${index}][${symIndex}]`}
                        onClick={() => setHighlightedSymbols({
                            ...highlightedSymbols,
                            [key]: !highlightedSymbols[key as keyof HightlightedSymbols]
                        })}
                        className={`SymbolImage ${highlightedSymbols[key as keyof HightlightedSymbols] ? "SymbolClicked" : ""}`}
                        src={`/symbols/${i}`}
                    />
                })}
            </div>
        })}
    </div>
}

export default Symbols

const defaultHighlightedSymbols: HightlightedSymbols = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
}

interface HightlightedSymbols {
    1: boolean
    2: boolean
    3: boolean
    4: boolean
    5: boolean
    6: boolean
    7: boolean
    8: boolean
    9: boolean
    10: boolean
    11: boolean
    12: boolean
    13: boolean
    14: boolean
    15: boolean
    16: boolean
    17: boolean
    18: boolean
    19: boolean
    20: boolean
    21: boolean
    22: boolean
    23: boolean
    24: boolean
    25: boolean
    26: boolean
    27: boolean
    28: boolean
    29: boolean
    30: boolean
    31: boolean
}