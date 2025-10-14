import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PizzaGetAll from './PizzaGetAll.tsx';
import PizzaGetById from './PizzaGetById.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PizzaGetAll />} />
        <Route path="/:id" element={<PizzaGetById />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
