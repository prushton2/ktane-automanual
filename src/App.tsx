import { useState, type JSX } from 'react'
import './App.css'
import Wires from './components.tsx/Wires'
import Setup, { type Indicators } from './components.tsx/Setup'
import Button from './components.tsx/Button'
import Symbols from './components.tsx/Symbols'
import SimonSays from './components.tsx/SimonSays'

interface ComponentInfo {
  name: string
  component: JSX.Element
}

function App() {
    const [batteries, setBatteries] = useState(-1)
    const [serialNumber, setSerialNumber] = useState("")
    const [indicators, setIndicators] = useState({} as Indicators)

  const components: ComponentInfo[] = [
    {
      name: "Setup",
      component: <Setup onChange={(b, s, i) => {setBatteries(b), setSerialNumber(s), setIndicators(i)}} />
    },
    {
      name: "Wires",
      component: <Wires serialNumber={serialNumber} />
    },
    {
      name: "Button",
      component: <Button batteries={batteries} indicators={indicators}/>
    },
    {
      name: "Symbols",
      component: <Symbols />
    },
    {
      name: "Simon Says",
      component: <SimonSays serialNumber={serialNumber} />
    }
  ]

  return (
    <>
      {components.map((e, i) => {
        return <div key={`components[${i}]`} className='modDiv'>
          <label className='modName'>{e.name}</label>
          {e.component}
        </div>
      })}
    </>
  )
}

export default App
