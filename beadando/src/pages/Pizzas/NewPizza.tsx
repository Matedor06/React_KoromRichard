import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import apiClient from "../../api/apiClient";
import type { Pizza } from "../../types/Pizza";

const NewPizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const submit = () => {
    apiClient
      .post("/pizzak", pizza)
      .then(() => toast.success("Sikeres hozzáadás!"))
      .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Új pizza hozzáadása</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Név</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pizza neve"
                value={pizza.nev}
                onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Pizza leírása"
                value={pizza.leiras}
                onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ár (Ft)</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={pizza.ar}
                onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Kép URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="kep.jpg"
                value={pizza.imageUrl}
                onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
              />
            </Form.Group>

            <Button variant="success" className="rounded-pill px-4" onClick={submit}>
              Hozzáadás
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPizza;
