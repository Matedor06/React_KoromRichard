import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Car } from "../types/Car";
import { Button, Table } from "react-bootstrap";

const Cart = () => {
  // autók betöltése
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    apiClient
      .get("/autok")
      .then((response) => setCars(response.data))
      .catch(() => toast.error("Hiba a betöltés során!"));
  }, []);

  // kosár kezelése
  const [kosar, setKosar] = useState<number[]>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);


  const removeItem = (index:number) => {
    setKosar(kosar.filter((_,i) => i !== index))
    toast.success("sikeres törlés")
  }


  // renderelés
  return (
    <>
      <h1>Kosár tartalam</h1>
      {kosar.length > 0 ? (
        <>
    <Table striped bordered hover>
      <thead>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </thead>
      <tbody>
        {kosar.map((value, index) => {
          const car = cars.find((c) => c.id === value);

          return (
            <tr>
              <td>{car?.marka} {car?.modell}</td>
              <td>{car?.ar} Ft</td>
              <td>
                <Button onClick={() => removeItem(index)}>Törlés</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    <Button onClick={()=> setKosar([])}>Törlés</Button>
    </>
      ):(<h2>A kosár tartalma üres</h2>)}
    </>
  );
};

export default Cart;
