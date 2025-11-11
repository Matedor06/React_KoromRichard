import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Link } from "react-router-dom";

const GetAllPizza = () => {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);
    useEffect(() =>{
    apiClient.get("/pizzak")
    .then((response) => {
      setPizzak(response.data);

    })
    .catch();
  }, []);
        
        
    
  return (
    <>
    <div>
        <h1>Összes Pizza</h1>
        {pizzak.map((pizza) => (
            <div>
                <div>{pizza.nev}<Link to={`/pizzak/${pizza.id}`}> Részletek </Link><Link to={`/pizzak`}>új</Link> <Link to={`/pizzak/update/${pizza.id}`}>Frissítés</Link></div>
                <div>{pizza.leiras}</div>
                <div>{pizza.ar}</div>
                <img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} alt={pizza.nev} width="200"/>
            </div>
        ))}
    </div>
    </>
  )
}
export default GetAllPizza