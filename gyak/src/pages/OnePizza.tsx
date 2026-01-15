import { useEffect, useState } from 'react'
import apiClient, { baseURL } from '../api/apiClient'
import { useNavigate, useParams } from 'react-router-dom'
import type { Pizza } from '../types/Pizza'
import { toast } from 'react-toastify'
import { Button, Col, Container, Row } from 'react-bootstrap'

function OnePizza() {
const {id} = useParams()
const navigate = useNavigate()
const [pizza, setPizza] = useState<Pizza>()


  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const deletePizza = () => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => {
        toast.success("Sikeres törlés!");
        navigate("/"); // kezdőlapra irányítás
      })
      .catch(() => toast.error("Sikertelen törlés!"));
  };

    const editPizza = () => {
        navigate(`/edit-pizza/${id}`)
    }

return (
    <>
    {pizza? (
        <Container>
            <Row>
                <Col>
                    <h1>{pizza.nev}</h1>
                    <h2>{pizza.leiras}</h2>
                    <p>{pizza.ar}</p>
                    <p>{pizza.imageUrl}</p>
                    <img width={200} src={`${baseURL}/kepek/${pizza.imageUrl}`} />

                <Button onClick={deletePizza}>Törlés</Button>
                <Button onClick={editPizza}>Edit Pizza</Button>
                <Button onClick={() => navigate("/")}>Vissza</Button>
                </Col>
                
            </Row>
        </Container>
        ): (<>A pizza nem található!</>)}
    </>
  )
}

export default OnePizza
