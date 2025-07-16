import "./Wires.css"
import { useEffect, useState, type JSX } from 'react'

function Wires({serialNumber}: {serialNumber: string}): JSX.Element {
    const [realWires, setRealWires] = useState<string[]>(["Empty", "Empty", "Empty", "Empty", "Empty", "Empty"])
    const [wires, setWires] = useState<string[]>([])

    useEffect(() => {
        let n_wires: string[] = []
        realWires.forEach((e) => {
            if(e != "Empty") {
                n_wires.push(e)
            }
        })
        setWires(n_wires)
    }, [realWires])

    function renderWires(): JSX.Element[] {
        let wiresElement: JSX.Element[] = []
        let colors: string[] = ["Red", "Green", "Blue", "Yellow", "White", "Black"]

        for (let i = 0; i < 6; i++) {
            wiresElement[i] = <div className="WireButtonRow">
                {colors.map((e) => {
                    return <button
                        className={`WireButton ${e == realWires[i] ? e : "Empty"}`}
                        onClick={() => {
                            let newWires = [...realWires];
                            if(newWires[i] == e) {
                                newWires[i] = "Empty"
                            } else {
                                newWires[i] = e;
                            }
                            setRealWires(newWires);
                        }}>
                        {e}
                    </button>
                })
                }
            </div>
        }
        return wiresElement
    }

    function solve(): string {
        let last = wires.length-1
        let serialEndsOdd = parseInt(serialNumber[serialNumber.length-1])%2 == 1
        switch (wires.length) {
            case 3:
                if(wires.indexOf("Red") == -1) {
                    return "Cut the second wire"
                }
                if(wires[last] == "White") {
                    return "Cut the last wire"
                }
                if(getOccurrence(wires, "Blue") > 1) {
                    return "Cut the last blue wire"
                }
                return "Cut the last wire"
            case 4:
                if(getOccurrence(wires, "Red") > 1 && serialEndsOdd) {
                    return "Cut the last red wire"
                }
                if(wires[last] == "Yellow" && getOccurrence(wires, "Red") == 0) {
                    return "Cut the first wire"
                }
                if(getOccurrence(wires, "Blue") == 1) {
                    return "Cut the first wire"
                }
                if(getOccurrence(wires, "Yellow") > 1) {
                    return "Cut the last wire"
                }
                return "Cut the second wire"
            case 5:
                if(wires[last] == "Black" && serialEndsOdd) {
                    return "Cut the fourth wire"
                }
                if(getOccurrence(wires, "Red") == 1 && getOccurrence(wires, "Yellow") > 1) {
                    return "Cut the first wire"
                }
                if(getOccurrence(wires, "Black") == 0) {
                    return "Cut the second wire"
                }
                return "Cut the first wire"
            case 6:
                if(getOccurrence(wires, "Yellow") == 0 && serialEndsOdd) {
                    return "Cut the third wire"
                }
                if(getOccurrence(wires, "Yellow") == 1 && getOccurrence(wires, "White") >1) {
                    return "Cut the fourth wire"
                }
                if(getOccurrence(wires, "Red") == 0) {
                    return "Cut the last wire"
                }
                return "Cut the fourth wire"
        }

        return "Unknown"
    }

    return (
        <div className="WireComponent">
            <div className="WireButtons">
                {renderWires()}
            </div>
            <label>{solve()}</label>
        </div>
    );
};


export default Wires;

function getOccurrence(array: string[], value: string): number {
    let count: number = 0;
    array.forEach((v) => (v === value && count++));
    return count;
  }