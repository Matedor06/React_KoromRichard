import { useEffect, useState } from "react";
import type { Car } from "../types/Car";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import apiClient, { baseURL } from "../api/apiClient";

const AllCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [kosar, setKosar] = useState<number[]>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/autok")
      .then((response) => setCars(response.data))
      .catch(() => toast.error("Hiba a betöltés során!"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (car: Car) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${baseURL}/kepek/${car.images[0]}`}
            style={{ height: "200px"}}
          />
          <Card.Body>
            <Card.Title>
              {car.marka} {car.modell}
            </Card.Title>
            <Card.Text>
              <strong>Ár:</strong> {car.ar} Ft<br />
              <strong>Évjárat:</strong> {car.evjarat}<br />
              <strong>Kilométer:</strong> {car.futas_km.toLocaleString()} km<br />
              <strong>Üzemanyag:</strong> {car.uzemanyag}<br />
              <strong>Váltó:</strong> {car.valto}<br />
              <strong>Szín:</strong> {car.szin}
            </Card.Text>
            <Button
              onClick={() => {
                setKosar([...kosar, car.id]);
                toast.success("Sikeres hozzáadás a kosárhoz!");
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
      <h1>Autók</h1>
      <Row>
        {cars.map((car) => generateCard(car))}
      </Row>
    </Container>
  );
};

export default AllCars;
