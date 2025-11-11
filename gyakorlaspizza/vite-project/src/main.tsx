import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetAllPizza from './pages/GetAllpizza'
import GetPizza from './pages/GetPizza'
import PostPizza from './pages/PostPizza'
import UpdatePizza from './pages/UpdatePizza'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAllPizza />} />
        <Route path="/pizzak/:id" element={<GetPizza/>}/>
        <Route path="/pizzak" element={<PostPizza/>}/>
        <Route path="/pizzak/update/:id" element={<UpdatePizza/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
