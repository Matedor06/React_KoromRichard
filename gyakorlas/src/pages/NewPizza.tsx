import {useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiClient, { } from "../api/apiClient"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/nav";


function NewPizza() {

    const navigate = useNavigate()

  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });


  const submit = () => {
    apiClient.post("/pizzak", pizza).then(() => {toast.success("susces"), navigate("/")})
  }

  return (
    <>
    <Navigation></Navigation>
        <h1>Név</h1>
        <input type="text" onChange={(e) => setPizza({...pizza, nev:e.target.value})} />
        <h2>Leírás</h2>
        <input type="text" onChange={(e) => setPizza({...pizza, leiras:e.target.value})} />
        <h2>Ár</h2>
        <input type="text" onChange={(e) => setPizza({...pizza, ar:Number(e.target.value)})} />
        <h2>imageUrl</h2>
        <input type="text" onChange={(e) => setPizza({...pizza, imageUrl:e.target.value})} />
        <Button onClick={() => submit()}>Felvétel</Button>
        

    </>
  )
}

export default NewPizza
