import { useState, useEffect } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function GetAll() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch pizzas");
        console.error("Error fetching pizzas:", error);
      });
  }, []);

  return (
    <>
      <h1>All Pizzas</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {pizzas.map((pizza) => (
          <Card style={{ width: "18rem" }} key={pizza.id} className="m-2">
            <Card.Img
              variant="top"
              src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
              alt={pizza.nev}
            />
            <Card.Body>
              <Card.Title>{pizza.nev}</Card.Title>
              <Card.Text>{pizza.leiras}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <strong>{pizza.ar} Ft</strong>
                <Button
                  variant="primary"
                  onClick={() => nav(`/pizza/${pizza.id}`)}
                >
                  View
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default GetAll;