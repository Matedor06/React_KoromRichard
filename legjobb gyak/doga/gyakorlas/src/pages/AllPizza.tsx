import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/nav";

function AllPizza() {
  const [pizzak, SetPizzak] = useState<Array<Pizza>>([]);
  const navigate = useNavigate();

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

  const generateCard = (i: Pizza) => {
    return (
      <>
        <Col>
          <Card
            style={{ width: "18rem", maxHeight: "700px", marginBottom: "10px" }}
          >
            <Card.Img
              src={`${baseURL}/kepek/${i.imageUrl}`}
              style={{ maxWidth: "200px" }}
            ></Card.Img>
            <Card.Body>
              <h1>{i.nev}</h1>
              {i.leiras}
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => navigate(`/pizza/${i.id}`)}>
                Megtekintés
              </Button>
              <Button onClick={() => setKosar([...kosar, Number(i.id)])}>
                Kosárba
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  };

  return (
    <>
    <Navigation></Navigation>
      <Container>
        <Row>{pizzak.map((i) => generateCard(i))}</Row>
      </Container>
    </>
  );
}

export default AllPizza;
