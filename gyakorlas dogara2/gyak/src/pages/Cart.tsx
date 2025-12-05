import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { Button } from "react-bootstrap";

const Cart = () => {
  // pizzák betöltése
  const [pizzak, setPizzak] = useState<Pizza[]>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("Hiba a betöltés során!"));
  }, []);

  // kosár kezelése
  const [kosar, setKosar] = useState<number[]>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  // kosár elemének törlése
  const removeItem = (index: number) => {
    setKosar(kosar.filter((_, i) => index !== i));
    toast.success("Sikeres törlés!");
  };

  // renderelés
  return (
    <table>
      <thead>
        <th>Név</th>
        <th>Ár</th>
        <th>Törlés</th>
      </thead>
      <tbody>
        {kosar.map((value, index) => {
          const pizza = pizzak.find((p) => Number(p.id) === value);

          return (
            <tr>
              <td>{pizza?.nev}</td>
              <td>{pizza?.ar} Ft</td>
              <td>
                <Button onClick={() => removeItem(index)}>Törlés</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Cart;
