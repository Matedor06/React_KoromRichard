import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import apiClient from "../../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import type { Order } from "../../types/Order";

const EditOrder = () => {
  const navigate = useNavigate();

  const {id} = useParams()
  const [order, setOrder] = useState<Order>({
    pizzaId: 0,
    mennyiseg: 0,
  });

  useEffect(() => {
    if (!id) return;

    apiClient
      .get(`/rendelesek/${id}`)
      .then((res) => setOrder(res.data))
      .catch(() => toast.error("A rendelések betöltése sikertelen volt"));
  }, [id]);

  const submit = () => {
    const dto = {
        pizzaId: order.pizzaId,
        mennyiseg: order.mennyiseg
    };
    apiClient
      .put(`/rendelesek/${id}`, dto)
      .then(() => {
        toast.success("Sikeres rendelés változtatása");
        navigate("/order");
      })
      .catch(() => toast.error("Sikertelen rendelés változtatása!"));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">Rendelés szerkesztése</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>PizzaId</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PizzaId"
                    value={order.pizzaId}
                    onChange={(e) => setOrder({ ...order, pizzaId: Number(e.target.value) })}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mennyiség</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mennyiség"
                    value={order.mennyiseg}
                    onChange={(e) => setOrder({ ...order, mennyiseg: Number(e.target.value) })}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" className="rounded-pill" onClick={submit}>
                    Mentés
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

export default EditOrder;