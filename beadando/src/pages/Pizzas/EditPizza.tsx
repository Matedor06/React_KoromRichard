import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import apiClient from "../../api/apiClient";
import type { Pizza } from "../../types/Pizza";

const EditPizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    

    apiClient
      .put(`/pizzak/${id}`, dto)
      .then(() => toast.success("Sikeres szerkesztés!"))
      .catch(() => toast.error("Sikertelen szerkesztés!"));
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Pizza szerkesztése</h2>
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

            <Button variant="warning" className="rounded-pill px-4" onClick={submit}>
              Szerkesztés
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPizza;
