import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Container, Row } from "react-bootstrap";
import type { Order } from "../types/Order";

const AllPizza = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch(() => toast.error("A megrendelések betöltése sikertelen volt"));
  }, []);

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {orders.map((i) => (
          <h1>
            {i.pizzaId} - {i.mennyiseg}
          </h1>
        ))}
      </Row>
    </Container>
  );
};

export default AllPizza;
