import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewPizza from './pages/NewPizza.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditPizza from './pages/EditPizza.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewPizza />} />
        <Route path="/edit/:id" element={<EditPizza />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
