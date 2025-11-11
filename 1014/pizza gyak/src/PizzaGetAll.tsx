import { useState, useEffect } from 'react'
import './App.css'
import type {Pizza} from "./types/Pizza"
import apiClient, { BACKEND_URL } from "./api/apiClient";
import { Link } from 'react-router-dom';

function PizzaGetAll() {
const [pizzak, setPizzak] = useState<Pizza[]>([]);
useEffect(() => {
    apiClient.get<Pizza[]>("/pizzak")
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
            <h2><Link to={`/${pizza.id}`}>{pizza.nev}</Link></h2>
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
        ))}
      </div>  
    </>
  )
}

export default PizzaGetAll
