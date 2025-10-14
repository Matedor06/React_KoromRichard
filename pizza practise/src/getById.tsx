import { useEffect, useState } from "react";
import "./getAll.css";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { useNavigate, useParams } from "react-router-dom";

function getById() {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  useEffect(() => {
    if (!id) return;
    apiClient
      .get<Pizza>(`/pizzak/${id}`)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [id]);

  return (
    <>
      <div>
        {pizza && (
          <div>
            <h1>{pizza.nev}</h1>
            <img
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={pizza.nev}
              width={200}
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
        )}
      </div>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Vissza a főmenüre
      </button>
    </>
  );
}

export default getById;
