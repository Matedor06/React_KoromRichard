import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { User } from "../types/User";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({ username: "", password: "" });

  const submit = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigate("/");
      })
      .catch(() => toast.error("Sikertelen bejelentkezés!"));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">Bejelentkezés</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Felhasználónév</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Felhasználónév"
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Jelszó</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Jelszó"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
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

export default Login;