import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../apiClient/ApiClient";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
function AllPizza() {

    const [pizzak, setPizzak] = useState<Pizza[]>([]);

    useEffect(() => {
        apiClient.get("/pizzak").then((response) => {
            setPizzak(response.data);
        }).catch((error) => {
            toast.error("A pizzák betöltése sikertelen volt");
        });
    }, []);

    const GenerateCard = (p: Pizza) => {
        return (
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
                <Card.Body>
                    <Card.Title>{p.nev}</Card.Title>
                    <Card.Text>{p.leiras}</Card.Text>
                    <Button variant="primary">Kosárba</Button>
                </Card.Body>
            </Card>
            </Col>
    );
    };

  return (
    <Container>
        <Row>
            {pizzak.map((p) => GenerateCard(p))}
        </Row>
    </Container>
  );
}
export default AllPizza;