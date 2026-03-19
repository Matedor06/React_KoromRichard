import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { Order } from "../../types/Order";

const NewOrder = () => {
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order>({ pizzaId: 0, mennyiseg: 0 });

  const submit = () => {
    apiClient
      .post("/rendelesek", order)
      .then(() => {
        toast.success("Sikeres rendelés felvétele");
        navigate("/");
      })
      .catch(() => toast.error("Sikertelen rendelés felvétel!"));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">Rendelés felvétele</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>PizzaId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PizzaId"
                    onChange={(e) => setOrder({ ...order, pizzaId: Number(e.target.value) })}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mennyiség</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mennyiség"
                    onChange={(e) => setOrder({ ...order, mennyiseg: Number(e.target.value) })}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" className="rounded-pill" onClick={submit}>
                    Bejelentkezés
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewOrder;