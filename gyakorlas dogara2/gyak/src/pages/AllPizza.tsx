import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/ApiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);
  const [kosar, setKosar] = useState<number[]>(JSON.parse(localStorage.getItem("kosar") ?? "[]"));

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("Hiba a betöltés során!"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeres hozzáadás!");
              }}
              variant="primary"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row>{pizzak.map((p) => generateCard(p))}</Row>
    </Container>
  );
};

export default AllPizza;
