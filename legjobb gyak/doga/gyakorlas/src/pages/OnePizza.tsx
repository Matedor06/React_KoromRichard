import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../navigation/nav";

function AllPizza() {
  const [pizza, SetPizza] = useState<Pizza>();

  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => SetPizza(res.data))
      .catch(() => toast.error("gatya"));
  }, []);

  const editPizza = () => {navigate(`/edit-pizza/${pizza?.id}`)};
  const deletePizza = () => 
    {
        apiClient.delete(`/pizzak/${pizza?.id}`).then(() => {toast.success("siker"), navigate('/')})
    }

  return (
    <>
    <Navigation></Navigation>
      <Container>
        <Row>
          <Col sm={8}>
            <h1>{pizza?.nev}</h1>
            <h2>{pizza?.leiras}</h2>

            <Button variant="warning" onClick={editPizza}>
              Szerkesztés
            </Button>
            <Button variant="danger" onClick={deletePizza}>
              Törlés
            </Button>
          </Col>
          <Col sm={4}>
            <img width={200} src={`${baseURL}/kepek/${pizza?.imageUrl}`} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllPizza;
