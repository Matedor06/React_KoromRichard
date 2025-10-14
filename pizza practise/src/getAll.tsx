import { useEffect, useState } from "react";
import "./getAll.css";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { useNavigate } from "react-router-dom";

function getAll() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);
  const nav = useNavigate();
  useEffect(() => {
    apiClient
      .get<Pizza[]>("/pizzak")
      .then((response) => {
        setPizzak(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <>
      <h1>Pizzák</h1>
      <div>
        {pizzak.map((pizza) => (
          <div>
            <h2>{pizza.nev}</h2>
            <img
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={pizza.nev}
              width={200}
              onClick={() => {
                nav(`/${pizza.id}`);
              }}
              style={{ cursor: "pointer" }}
            />
            <p>{pizza.leiras}</p>
            <p
              style={{
                color: "red",
                fontWeight: "bolder",
                textDecoration: "underline",
              }}
            >
              Ár: {pizza.ar} Ft
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default getAll;
