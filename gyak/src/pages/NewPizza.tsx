
import { useState } from 'react';
import type { Pizza } from '../types/Pizza'
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function NewPizza() {

  const navigate = useNavigate()

  const [nev, setNev]= useState("")
  const [leiras, setLeiras]= useState("")
  const [ar, setAr]= useState(0)
  const [imageUrl, setImageUrl]= useState("")

  const pizza : Pizza = {
    nev,
    leiras,
    ar,
    imageUrl,
  };

  
  const submit = () => {
    apiClient.post("/pizzak",pizza).then(() => {toast.success("Sikeres hozzáadás!");navigate("/")}).catch(() => toast.error("Sikertelen hozzáadás!"));
  }



return (
    <>
      <h1>Név:</h1>
      <input
        type="text"
        onChange={(e) => setNev(e.target.value )}
      />

      <h1>Leírás</h1>
      <input
        type="text"
        onChange={(e) => setLeiras(e.target.value )}
      />

      <h1>Ár</h1>
      <input
        type="number"
        onChange={(e) => setAr(Number(e.target.value ))}
      />

      <h1>Kép URL</h1>
      <input
        type="text"
        onChange={(e) => setImageUrl(e.target.value )}
      />

      <br />
      <button onClick={submit}>Hozzáadás</button>
    </>
  )
}

export default NewPizza
