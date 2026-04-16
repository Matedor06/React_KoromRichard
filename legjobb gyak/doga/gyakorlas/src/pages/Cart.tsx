import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../navigation/nav";

function Cart() {
  const [pizzak, SetPizzak] = useState<Array<Pizza>>([]);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => SetPizzak(res.data))
      .catch(() => toast.error("gatya"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((v, i) => i !== searchedIndex));
  };

  return (
    <>
    <Navigation></Navigation>
        {kosar.length > 0 ? (
            <>
      <h1>Kosár tartalma</h1>
      <Table>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {kosar.map((id, index) => {
            const pizza = pizzak.find((p) => Number(p.id) == id);
            return (
              <>
                <tr>
                  <td>{pizza?.nev}</td>
                  <td>{pizza?.ar}</td>
                  <td>
                    <Button onClick={() => removeItem(index)}>Törlés</Button>
                  </td>
                </tr>
              </>
            );
          })}

        </tbody>
        <tfoot>
            <h2>összesen:</h2>
            {kosar.reduce((acc, id) => {
                const pizza = pizzak.find((p) => Number(p.id) == id);
                return acc + (pizza?.ar ?? 0)
            }, 0)}
            <br />
            <Button onClick={() => setKosar([])}>Összes Törlés</Button>
        </tfoot>
      </Table>
        </>
        ) : (
            <h1>A kosár üres</h1>
        )}
    </>
  );
}

export default Cart;
