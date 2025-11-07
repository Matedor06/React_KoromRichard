import { useState } from "react";
import { Link } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const PostPizza = () => {
  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ar, setAr] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const addPizza = () => {
    // Validáció a küldés előtt
    if (!nev.trim()) {
      toast.error("A pizza neve kötelező!", {
        className: 'custom-toast-error',
        toastId: 'postPizzaValidation'
      });
      return;
    }
    if (!leiras.trim()) {
      toast.error("A leírás kötelező!", {
        className: 'custom-toast-error',
        toastId: 'postPizzaValidation'
      });
      return;
    }
    if (ar <= 0) {
      toast.error("Az ár pozitív szám legyen!", {
        className: 'custom-toast-error',
        toastId: 'postPizzaValidation'
      });
      return;
    }
    if (!imageUrl.trim()) {
      toast.error("A kép URL kötelező!", {
        className: 'custom-toast-error',
        toastId: 'postPizzaValidation'
      });
      return;
    }

    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };
    apiClient
      .post("/pizzak", p)
      .then(() => toast.success("Pizza hozzáadva", {
        className: 'custom-toast-success',
        toastId: 'postPizzaSuccess'
      }))
      .catch(() => toast.error("Hiba a pizza hozzáadásánál", {
        className: 'custom-toast-error',
        toastId: 'postPizzaError'
      }));
  };

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
      <button onClick={addPizza}>Hozzáadás</button>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Vissza a főoldalra</Link>
      </div>
    </>
  );
};

export default PostPizza;
