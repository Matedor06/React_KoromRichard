import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import { BACKEND_URL } from '../api/apiClient';
import apiClient from '../api/apiClient';

const GetAllPizza = () => {
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
      <Link to="/">← Vissza a főoldalra</Link>
      <div>
        {pizzak.map((pizza) => (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ margin: 0 }}>{pizza.nev}</h2>
              <Link to={`/pizza/${pizza.id}`}>👀</Link>
              <Link to={`/update-pizza/${pizza.id}`}>✏️</Link>
            </div>
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
      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Vissza a főoldalra</Link>
      </div>  
    </>
  )
}

export default GetAllPizza;