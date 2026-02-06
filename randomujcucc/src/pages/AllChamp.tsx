import { useEffect, useState } from 'react'
import type { Champ } from '../types/Champ'
import apiClient from '../api/apiClient'
import { Card, Carousel, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AllChamp.module.css'

const BASE_URL = "http://localhost:8005/api"

function AllChamp() {


    const [champs, setChamps]= useState<Array<Champ>>([])

    useEffect(()=> {
        apiClient.get("/champions").then((response) => setChamps(response.data))
    },[])


    const generateCard = (champ: Champ) => {
        return (
            <Card style={{ width: '30rem' }}>
                <Carousel className={styles.customCarousel}>
                    {champ.images.map((filename, idx) => (
                        <Carousel.Item key={idx} >
                            <img 
                                className="d-block w-100"
                                src={`${BASE_URL}/images/${filename}`}
                                style={{ objectFit: 'cover', height: 180 }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body>
                    <Card.Title>{champ.name}</Card.Title>
                    <Card.Text>{champ.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    return (
    <>
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
                {champs.map((c, idx) => (
                    <Col key={c.id ?? idx} className="d-flex justify-content-center">
                        {generateCard(c)}
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default AllChamp
