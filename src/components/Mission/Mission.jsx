import React from 'react';
import "./mission.css";
import {  Row, Col, Card, Container } from 'react-bootstrap';
import img1 from "../../asset/food.jpg";
import img2 from "../../asset/education.jpg";
const Mission = () => {
    const missions = [{
        id:1,
        title: "Food Suppies to Orphanages",
        content: "We reach out to several orphanages in the country to distribute relief items, clothings and groceries. This is mostly done durimg festive seasons so that we can share ",
        img:img1
    },
    {
        id:2,
        title: "Financial Empowerment for Widows and Aged Women",
        content: "We work directly with communities to ensure that widows and old women can have a sustainable means of livelihood through skills and capital development",
        img:"https://togetherwomenrise.org/wp-content/uploads/2020/09/GFW-Brookbank-Korogocho-2.jpg"
    },
    {
        id:3,
        title: "Sharing of Educational Materials and Clothings to children living in slums",
        content: "Through our initiative, we are able support children of underserved and remote communities in Nigeria to provide educational materials needed in learning.",
        img:img2
    }]
    const mission  = missions.map((data) =>{
        return( <Col key={data.id} lg={4} md={4} sm={12}>
        <Card className="card-card border-0">
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
            <Card.Title className='card-t text-center'>{data.title}</Card.Title>
            <Card.Text>
            {data.content}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>

        </Col>)
    })
  return (
    <>
        <Container className='mission-w' fluid="true">
            <div className="mission-top">
                <p>What We Are Doing</p>
                <h3>
                We are on a mission  to <br/> help the most vulnerable 
                </h3>
            </div>
            <div className='mission-wrap'>
        <Row>
          {mission}
        </Row>
        </div>
        </Container>
    </>
  )
}

export default Mission