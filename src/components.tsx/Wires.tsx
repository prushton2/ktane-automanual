import "./Wires.css"
import { useEffect, useState, type JSX } from 'react'

function Wires(): JSX.Element {
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
        switch (wires.length) {
            case 3:
                if(wires.indexOf("Red") == -1) {
                    return "Cut the second wire"
                }
                if(wires[-1] == "White") {
                    return "Cut the last wire"
                }
                if(getOccurrence(wires, "Blue") > 1) {
                    return "Cut the last blue wire"
                }
                return "Cut the last wire"
            break;
            case 4:
            break;
            case 5:
            break;
            case 6:
            break;
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