import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { Button, Container, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_v, i) => i !== searchedIndex));
  };

  const kosarPizzak = kosar.map((id) => pizzak.find((p) => p.id == id));
  const vegosszeg = kosarPizzak.reduce((sum, p) => sum + (p?.ar ?? 0), 0);

  return (
    <Container className="py-4">
      <h2 className="mb-4">Kosár tartalma</h2>
      {kosar.length > 0 ? (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Név</th>
                <th>Ár</th>
                <th>Törlés</th>
              </tr>
            </thead>
            <tbody>
              {kosar.map((id, index) => {
                const pizza = pizzak.find((p) => p.id == id);
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pizza?.nev}</td>
                    <td>{pizza?.ar?.toLocaleString("hu-HU")} Ft</td>
                    <td>
                      <Button
                        onClick={() => removeItem(index)}
                        variant="outline-danger"
                        size="sm"
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="table-dark">
                <td colSpan={2}>
                  <strong>Összesen: {kosar.length} tétel</strong>
                </td>
                <td colSpan={2}>
                  <strong>Végösszeg: {vegosszeg.toLocaleString("hu-HU")} Ft</strong>
                </td>
              </tr>
            </tfoot>
          </Table>
          <Button onClick={() => setKosar([])} variant="outline-danger">
            Kosár kiürítése
          </Button>
        </>
      ) : (
        <p className="text-muted">A kosár üres.</p>
      )}
    </Container>
  );
};

export default Cart;
