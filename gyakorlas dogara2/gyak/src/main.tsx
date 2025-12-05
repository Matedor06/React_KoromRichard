import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './pages/AllPizza.tsx'
import Cart from './pages/Cart.tsx'
import { Toast, ToastContainer } from 'react-bootstrap'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPizza/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
      <ToastContainer/> 
  </StrictMode>

)
