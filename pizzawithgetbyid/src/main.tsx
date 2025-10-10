import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.tsx'
import Pizza from './GetById.tsx';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Pizza />} />

    </Routes>
  </BrowserRouter>

)
