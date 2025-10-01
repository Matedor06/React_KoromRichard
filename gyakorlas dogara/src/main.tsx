import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.tsx';
import Szam from './Szam.tsx';
import Aru from './Arus.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Szam" element={<Szam />} />
                <Route path="/Aru" element={<Aru />} />
                <Route path="*" element={<h1>404, az oldal nem található</h1>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
