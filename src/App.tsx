import { useState, type JSX } from 'react'
import './App.css'
import Wires from './components.tsx/Wires'
import Setup from './components.tsx/Setup'

interface ComponentInfo {
  name: string
  component: JSX.Element
}

function App() {
  const [selection, setSelection] = useState(0)

  const components: ComponentInfo[] = [
    {
      name: "Setup",
      component: <Setup />
    },
    {
      name: "Wires",
      component: <Wires />
    }
  ]

  return (
    <>
      {components.map((e, i) => {
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
