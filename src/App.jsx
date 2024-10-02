import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Checkout from './components/Checkout'
import SignIn from './components/SignIn'
import Returns from './components/Returns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/returns' element={<Returns />} />
      </Routes>
    </>
  )
}

export default App
