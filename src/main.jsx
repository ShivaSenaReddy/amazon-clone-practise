import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/ContextProvider.jsx'
import StateProvider from './components/StateProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <StateProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </StateProvider>
  </BrowserRouter>
  // </StrictMode>,
)
