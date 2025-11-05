import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import GetAllPizza from './pages/getAllPizza'
import GetOnePizza from './pages/getOnePizza'
import PostPizza from './pages/postPizza'
import UpdatePizza from './pages/updatePizza'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<GetAllPizza />} />
        <Route path="/pizza/:id" element={<GetOnePizza />} />
        <Route path="/add-pizza" element={<PostPizza />} />
        <Route path="/update-pizza/:id" element={<UpdatePizza />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
