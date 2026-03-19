import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './pages/AllPizza'
import { ToastContainer } from 'react-toastify'
import OnePizza from './pages/OnePizza'
import NewPizza from './pages/NewPizza'
import EditPizza from './pages/EditPizza'
import Login from './pages/Login'
import Cart from './pages/Cart'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllPizza/>}/>
      <Route path='/pizza/:id' element={<OnePizza/>}/>
      <Route path='/new-pizza' element={<NewPizza/>}/>
      <Route path="/edit-pizza/:id" element={<EditPizza/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart/>} />



    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
    
  </StrictMode>,
)
