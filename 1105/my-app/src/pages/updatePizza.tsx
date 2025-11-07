import { use, useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import '../index.css';

const updatePizza = () => {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ar, setAr] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const {id} = useParams();

  useEffect(() => {
    apiClient.get<Pizza>(`/pizzak/${id}`).then((response) => {
        setNev(response.data.nev);
        setLeiras(response.data.leiras);
        setAr(Number(response.data.ar));
        setImageUrl(response.data.imageUrl);
    }).catch((error) => toast.error("Hiba a pizza betöltésénél"));
  }, [id]);

  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };
    apiClient.put(`/pizzak/${id}`, p)
      .then((response) => toast.success("Pizza frissítve", {
        className: 'custom-toast-success',
        toastId: 'postPizzaSuccess'
      }))
      .catch((error) => toast.error("Hiba a pizza frissítésénél", {
        className: 'custom-toast-error',
        toastId: 'postPizzaError'
      }));
  };

  return (
    <>
      <h1>Pizza szerkesztése</h1>
      <table>
        <tr>
          <td>Név:</td>
          <td>
            <input type="text" value={nev} onChange={(e) => setNev(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Leírás:</td>
          <td>
            <input type="text" value={leiras} onChange={(e) => setLeiras(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Ár:</td>
          <td>
            <input
              type="number"
              value={ar}
              onChange={(e) =>  setAr(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép URL:</td>
          <td>
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </td>
        </tr>
      </table>
      <button onClick={submit}>Hozzáadás</button>
      <br></br>
      <Link to="/pizzas">← Vissza a pizzák listájához</Link>
    </>
  );
};

export default updatePizza;
