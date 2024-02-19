import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://datasam.vercel.app/_next/image?url=%2Fimages%2Flogo_web.png&w=1200&q=75" className="logo" alt="datasam" />
        </a>
      </div>
      <h1>Me puedo inscribir?</h1>
      <div className="card">
        <button onClick={() => setShow(true)}>
          Ver
        </button>
      </div>
      {show && <p className="">
        Nop jajan't
      </p>}
    </>
  )
}

export default App
