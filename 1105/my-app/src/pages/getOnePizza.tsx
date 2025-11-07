import { useState, useEffect } from 'react'
import type {Pizza} from "../types/Pizza"
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const GetOnePizza = () => {
const [pizza, setPizza] = useState<Pizza | null>(null);
const { id } = useParams<{ id: string }>();
useEffect(() => {
    if (!id) return;
    apiClient.get<Pizza>(`/pizzak/${id}`)
    .then((response) => {
      setPizza(response.data);
    })
    .catch((error) => {
      toast.error("Hiba a pizzak betöltésénél ",error)
    });
  }, [id]);

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
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          Ár: {pizza.ar} Ft
        </p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/pizzas">← Vissza a pizzák listájához</Link>
        </div>
    </>
  )
}
export default GetOnePizza;