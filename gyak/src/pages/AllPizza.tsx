import { useEffect, useState } from 'react'
import type { Pizza } from '../types/Pizza'
import apiClient, { baseURL } from '../api/apiClient';
import { toast } from 'react-toastify';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom';

function AllPizza() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get('/pizzak').then((response) => setPizzak(response.data)).catch((error) => toast.error(error))
  },[]);

  const generateCard = (p:Pizza) => {
    return(
        <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
          </Card.Body>
          <Button onClick={() => navigate(`/pizza/${p.id}`)}>Megtekintés</Button>
        </Card>
      </Col>
    )
  }
  return (
    <>
        <Container><Row>
          {pizzak.map((i) => generateCard(i))}  
        </Row></Container>
    </>
  )
}

export default AllPizza
