import { useState, type JSX } from 'react'
import './App.css'
import Wires from './components.tsx/Wires'
import Setup from './components.tsx/Setup'

interface ComponentInfo {
  name: string
  component: JSX.Element
}

function App() {
    const [batteries, setBatteries] = useState(-1)
    const [serialNumber, setSerialNumber] = useState("")

  const components: ComponentInfo[] = [
    {
      name: "Setup",
      component: <Setup onChange={(b, s) => {setBatteries(b), setSerialNumber(s)}} />
    },
    {
      name: "Wires",
      component: <Wires serialNumber={serialNumber} />
    }
  ]

  return (
    <>
      {components.map((e) => {
        return <div className='modDiv'>
          <label className='modName'>{e.name}</label>
          {e.component}
        </div>
      })

      }
    </>
  )
}

export default App
