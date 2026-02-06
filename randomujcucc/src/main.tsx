import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AllChamp from './pages/AllChamp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AllChamp />
  </StrictMode>,
)
