import { useEffect, useState } from "react"
import type { Car } from "../Types/Car"
import apiClient, { baseURL } from "../Api/apiClient"
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
function AllCar() {

const [cars, setCars] = useState<Array<Car>>([])

const [kosar, setKosar] = useState<Array<number>>(JSON.parse(localStorage.getItem("kosar") ?? "[]"));
 
useEffect(() => {
    apiClient.get("/autok").then((res) => setCars(res.data))
},[])


useEffect(()=> {
    localStorage.setItem("kosar" , JSON.stringify(kosar))
},[kosar]);


const generateCard = (c:Car) => {
    return(
    <>
        <Col>
        <Card style={{width:"18rem"}}>
            <Carousel>
                {c.images.map((filename, idx) => (
                <Carousel.Item key={idx}>
                    <img    src={`${baseURL}/kepek/${filename}`}
                                style={{ objectFit: 'cover', height: 180 }}/>
                </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body>
                <Card.Text>{c.marka}</Card.Text>
                <Card.Text>{c.modell}</Card.Text>
                <Button onClick={() => {setKosar([...kosar, Number(c.id)])}}>Kosárba</Button>
            </Card.Body>
        </Card>
        </Col>
    </>
    )
}

  return (
    <>
        <Container>
            <Row>
                {cars.map((c) => generateCard(c))}
            </Row>
        </Container>
    </>
  )
}

export default AllCar
