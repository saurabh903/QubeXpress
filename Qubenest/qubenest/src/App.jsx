import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Services from './components/Services/Services.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar/>
      <Services/>
    </div>
  )
}

export default App
