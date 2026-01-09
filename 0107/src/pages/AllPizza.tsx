import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const AllPizza = () => {
  const navigate = useNavigate();

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

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="primary"
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeresen a kosárba tetted a terméket!");
              }}
              variant="success"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Button onClick={() => navigate(`/cart`)} variant="primary">
        Megtekintés kosár
      </Button>
      <Container>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {pizzak.map((i) => generateCard(i))}
        </Row>
      </Container>
    </>
  );
};

export default AllPizza;
