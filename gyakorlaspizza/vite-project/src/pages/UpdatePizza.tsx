import { useEffect, useState, } from 'react'
import type {Pizza} from "../types/Pizza"
import apiClient from "../api/apiClient";
import {Link, useParams } from 'react-router-dom';

const UpdatePizza = () => {

    const[nev, setNev] = useState("");
    const [leiras, setLeiras] = useState("");
    const [ar, setAr] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        apiClient.get(`/pizzak/${id}`)
            .then((response) => {
                const pizza = response.data;
                setNev(pizza.nev);
                setLeiras(pizza.leiras);
                setAr(pizza.ar);
                setImageUrl(pizza.imageUrl);
            })
            .catch(() => {
                alert("Hiba történt a pizza betöltésekor");
            });
    }, [id]);

    const UpdatePizza = () =>{
        const p: Pizza ={
            nev,
            leiras,
            ar,
            imageUrl,
        }


    apiClient.put(`/pizzak/${id}`, p)
    .then(() => {
      alert("Sikeres frissítés");
    })
    .catch(() => {
      alert("Sikertelen frissítés");
    });
  }

  return (
     <>
      <h1>Új Pizza</h1>
      <table>
        <tr>
          <td>Név:</td>
          <td>
            <input type="text" onChange={(e) => setNev(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Leírás:</td>
          <td>
            <input type="text" onChange={(e) => setLeiras(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Ár:</td>
          <td>
            <input
              type="number"
              onChange={(e) => setAr(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép URL:</td>
          <td>
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
          </td>
        </tr>
      </table>
      <button onClick={UpdatePizza}>Frissítés</button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Vissza a főoldalra</Link>
      </div>
    </>
  )
}

export default UpdatePizza