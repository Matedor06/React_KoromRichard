import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPizza from './pages/AllPizza'
import OnePizza from './pages/OnePizza'
import EditPizza from './pages/EditPizza'
import NewPizza from './pages/NewPizza'
import Login from './pages/Login'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllPizza/>}/>
      <Route path='/pizza/:id' element={<OnePizza/>}/>
      <Route path='/edit-pizza/:id' element={<EditPizza/>}/>
      <Route path='/new-pizza' element={<NewPizza/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>






    </Routes> 
    </BrowserRouter>
        <ToastContainer theme="colored" />

  </StrictMode>,
)
