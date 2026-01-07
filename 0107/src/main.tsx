import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './pages/AllPizza'
import OnePizza from './pages/OnePizza'
import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/pizza/:id" element={<OnePizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
