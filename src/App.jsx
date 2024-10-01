import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
