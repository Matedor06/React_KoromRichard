import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiClient, { } from "../api/apiClient"
import { toast } from "react-toastify"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../navigation/nav";


function EditPizza() {

 const navigate = useNavigate()
 const {id} = useParams()

  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("gatya"));
  }, []);


  const submit = () => {
    const dto = {
      nev: pizza.nev,
      leiras: pizza.leiras,
      ar: pizza.ar,
      imageUrl: pizza.imageUrl,
    };


    apiClient.put(`/pizzak/${id}`, dto).then(() => {toast.success("susces"), navigate("/")})
  }

  return (
    <>
    <Navigation></Navigation>
        <h1>Név</h1>
        <input type="text" value={pizza.nev} onChange={(e) => setPizza({...pizza, nev:e.target.value})} />
        <h2>Leírás</h2>
        <input type="text" value={pizza.leiras} onChange={(e) => setPizza({...pizza, leiras:e.target.value})} />
        <h2>Ár</h2>
        <input type="text" value={pizza.ar} onChange={(e) => setPizza({...pizza, ar:Number(e.target.value)})} />
        <h2>imageUrl</h2>
        <input type="text" value={pizza.imageUrl} onChange={(e) => setPizza({...pizza, imageUrl:e.target.value})} />
        <Button onClick={() => submit()}>Felvétel</Button>
        

    </>
  )
}

export default EditPizza
