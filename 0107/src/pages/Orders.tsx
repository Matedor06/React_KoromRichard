import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import {Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Order } from "../types/Order";
const Orders = () => {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((response) => setOrders(response.data))
      .catch(() => toast.error("A rendelések betöltése sikertelen volt"));
  }, []);


  return (
    <>
      <Container>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {orders.map((i) => {
            return (<h1>{i.pizzaId} - {i.mennyiseg}</h1>)
          })}
        </Row>
      </Container>
    </>
  );
};

export default Orders;
