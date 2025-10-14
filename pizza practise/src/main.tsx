import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GetAll from "./getAll.tsx";
import GetById from "./getById.tsx";
import GetByIdImg from "./getByIdImg.tsx";
import GetAllCyrillic from "./getAllCyrillic.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetAll />} />
        <Route path="/cyrillic" element={<GetAllCyrillic />} />
        <Route path="/:id" element={<GetById />} />
        <Route path="/img/:id" element={<GetByIdImg />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
