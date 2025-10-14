import { useState, useEffect } from 'react'
import './App.css'
import type {Pizza} from "./types/Pizza"
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { useParams } from 'react-router-dom';

function PizzaGetById() {
const [pizza, setPizza] = useState<Pizza | null>(null);
const { id } = useParams<{ id: string }>();
useEffect(() => {
    if (!id) return;
    apiClient.get<Pizza>(`/pizzak/${id}`)
    .then((response) => {
      setPizza(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
  }, []);

if (!pizza) return <div>Nincs ilyen pizza</div>

  return (
    <>
        <h1>{pizza.nev}</h1>
        <img
          src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
          alt={pizza.nev}
            width={200}
        />
        <p>{pizza.leiras}</p>
        Ár: {pizza.ar} Ft
    </>
  )
}

export default PizzaGetById