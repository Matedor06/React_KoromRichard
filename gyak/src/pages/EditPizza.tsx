import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nev, setNev] = useState("");
  const [leiras, setLeiras] = useState("");
  const [ar, setAr] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const pizza : Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
  }

   useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => {setNev(response.data.nev);setLeiras(response.data.leiras);setAr(response.data.ar);setImageUrl(response.data.imageUrl)})
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    apiClient
    .put(`/pizzak/${id}`,pizza)
    .then(() => {toast.success("Sikeres szerkesztés!");navigate("/")})
    .catch(() => toast.error("Sikertelen szerkesztés!"));
  }


  return (
    <>
      <h1>Név:</h1>
      <input
        type="text"
        value={pizza.nev}
        onChange={(e) => setNev(e.target.value )}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        value={pizza.leiras}
        onChange={(e) => setLeiras(e.target.value )}
      />

      <h1>Ár</h1>
      <input
        type="number"
        value={pizza.ar}
        onChange={(e) => setAr(Number(e.target.value ))}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        value={pizza.imageUrl}
        onChange={(e) => setImageUrl(e.target.value )}
      />

      <br />
      <button onClick={submit}>Szerkesztés</button>
    </>
  );
};

export default EditPizza;
