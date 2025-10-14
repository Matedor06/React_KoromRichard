import { useEffect, useState } from "react";
import "./getAll.css";
import type { Pizza } from "./types/Pizza";
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { useParams } from "react-router-dom";

function getByIdImg() {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const { id } = useParams<{ id: string }>();

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
      {pizza && (
        <div>
          <h1>{pizza.nev}</h1>
          <img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} alt={pizza.nev} />
        </div>
      )}
    </>
  );
}

export default getByIdImg;
