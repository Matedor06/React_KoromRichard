import React, { useEffect, useState } from "react";
import type { Pizza } from "./types/Pizza";
import "./App.css";
import apiClient from "./api/apiClient";
import { BACKEND_URL } from "./api/apiClient";

function App() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzas")
      .then((response) => {
        setPizzak(response.data);
      })
      .catch((reasion) => alert(reasion));
  }, []);
  return (
    <>
      {pizzak.map((p) => (
        <div>
          <h2>{p.name}</h2>
          <img src={BACKEND_URL + "/kepek/" + p.imageUrl} />
        </div>
      ))}
    </>
  );
}

export default App;
