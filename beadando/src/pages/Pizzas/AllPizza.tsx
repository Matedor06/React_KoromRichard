import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Pizza } from "../../types/Pizza";
import apiClient, { baseURL } from "../../api/apiClient";



const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card className="h-100">
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex gap-2">
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="outline-primary"
              size="sm"
              className="flex-grow-1 rounded-pill"
            >
              Megtekintés
            </Button>
            <Button
              onClick={() => navigate(`/edit-pizza/${p.id}`)}
              variant="outline-warning"
              size="sm"
              className="flex-grow-1 rounded-pill"
            >
              Szerkesztés
            </Button>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeresen a kosárba tetted a terméket!");
              }}
              variant="success"
              size="sm"
              className="flex-grow-1 rounded-pill"
            >
              Kosárba
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  return (

    <Container>
      <Row className="g-4">
        {pizzak.map((i) => generateCard(i))}
      </Row>
    </Container>
  );
};

export default AllPizza;
