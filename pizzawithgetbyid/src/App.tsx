import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Pizza } from "./types/Pizza"
import "./App.css";
import apiClient from "./api/apiClient";
import { BACKEND_URL } from "./api/apiClient";

function App() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => {
        setPizzak(response.data);
      })
      .catch((reasion) => alert(reasion));
  }, []);
  return (
    <>
      <h1>Pizza rendelő</h1>
      <div className="pizza-container">
        {pizzak.map((p) => (
          <div key={p.id} className="pizza-card">
            <img src={BACKEND_URL + "/kepek/" + p.imageUrl} width={200}/>
            <h2>{p.nev}</h2>
            <p>{p.leiras}</p>
            <p className="price">{p.ar} Ft</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;