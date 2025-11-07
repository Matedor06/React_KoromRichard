import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import { BACKEND_URL } from '../api/apiClient';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import './getAllPizza.css';

const GetAllPizza = () => {
const [pizzak, setPizzak] = useState<Pizza[]>([]);
useEffect(() => {
    apiClient.get<Pizza[]>("/pizzak")
    .then((response) => {
      setPizzak(response.data);

    })
    .catch(() => {
      toast.error("Hiba a pizzak betöltésénél", {
        className: 'custom-toast-error',
        toastId: 'getAllPizzaError'
      })
    });
  }, []);


  const OnDelete = (id: number) => {
        apiClient.delete(`/pizzak/${id}`)
      .then((response) => toast.success("Pizza törölve", {
        className: 'custom-toast-success',
        toastId: 'postPizzaSuccess'
      }))
      .catch((error) => toast.error("Hiba a pizza törlésénél", {
        className: 'custom-toast-error',
        toastId: 'postPizzaError'
      }));
      setPizzak(pizzak.filter(pizza => pizza.id !== id));

  }
  return (
    <>
      <h1>Pizzák</h1>
      <Link to="/">← Vissza a főoldalra</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {pizzak.map((pizza) => (
          <div
            key={pizza.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              width: '280px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{pizza.nev}</h2>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                <Link to={`/pizza/${pizza.id}`}>👀</Link>
                <Link to={`/update-pizza/${pizza.id}`}>✏️</Link>
                <button
                  onClick={() => OnDelete(pizza.id!)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: 0
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
            <img
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={pizza.nev}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <p style={{ margin: '12px 0' }}>{pizza.leiras}</p>
            <p
              style={{
                color: "red",
                fontWeight: "bolder",
                textDecoration: "underline",
                margin: 0
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