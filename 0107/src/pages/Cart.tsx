import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../api/apiClient";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Cart = () => {

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );


    useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(kosar));
  }, [kosar]);


  const removeitem = (value:Number)=>
  {
    setKosar(kosar.filter((_,i)=> value !== i))
  }





  return (
    <>
    {kosar.length > 0 ? (
    <Table striped bordered hover>
        <thead>
            <th>Név</th>
            <th>Ár</th>
            <th>Törlés</th>
        </thead>
        <tbody>
            {kosar.map((value, index) =>{

                const pizza = pizzak.find((p) => value === Number(p.id))
                return(
                    <tr>
                    <td>{pizza?.nev}</td>
                    <td>{pizza?.ar}</td>
                    <td><Button onClick={() =>removeitem(index)}>Törlés</Button></td>
                    </tr>
                )
            })}
      </tbody>
      <Button onClick={() => setKosar([])}>kiürítés</Button>
        </Table>
    ):(<>üres a kosarad</>)
}
    </>)
    
};

export default Cart;