import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../../api/apiClient";
import { Button, Col, Container, Row } from "react-bootstrap";
import type { Order } from "../../types/Order";

const OneOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    apiClient
      .get(`/rendelesek/${id}`)
      .then((response) => setOrder(response.data))
      .catch(() => toast.error("A rendelésel betöltése sikertelen volt"));
  }, [id]);

  const deleteOrder = () => {
    apiClient
      .delete(`/rendelesek/${id}`)
      .then(() => {
        toast.success("Sikeres törlés!");
        navigate("/order");
      })
      .catch(() => toast.error("Sikertelen törlés!"));
  };

  const editOrder = () => {
    navigate(`/edit-order/${5}`);
  };
  return (
    <Container>
      {order ? (
        <Row>
          <Col sm={8}>
            <h1>{order.pizzaId}</h1>
            <h2>{order.mennyiseg}</h2>

            <Button variant="warning" onClick={editOrder} className="me-2">
              Szerkesztés
            </Button>
            <Button variant="danger" onClick={deleteOrder}>
              Törlés
            </Button>
          </Col>
        </Row>
      ) : (
        <>A rendelés nem található!</>
      )}
    </Container>
  );
};

export default OneOrder;
