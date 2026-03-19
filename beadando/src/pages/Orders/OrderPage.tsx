import { useState, useEffect } from "react";
import type { Order } from "../../types/Order";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const navigate = useNavigate();

const [orders, setOrders] = useState<Array<Order>>([])
const isLogged = () => localStorage.getItem("credentials") !== null;


  useEffect(() => {
    if (!isLogged()) return;

    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch(() => toast.error("A megrendelések betöltése sikertelen volt"));
  }, []);

return isLogged() ? (
  
    <Container>
      <h1>rendelesek:</h1>
      <Col className="g-4">
        {orders.map((i) => (
          <div>
            <h1>
              {i.pizzaId} - {i.mennyiseg}
            </h1>
            <button onClick={() => navigate(`/edit-order/${5}`)}>Szerkesztés</button>
            <button onClick={() => navigate(`/order/${5}`)}>Megnyitás</button>
          </div>
        ))}
      </Col>
    </Container>
  ) : (
    <h1>Kérlek jelentkezz be a megrendelések megtekintéséhez!</h1>
  );
};

export default OrderPage;