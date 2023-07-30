import React from 'react';
import {  Row, Col, Card} from 'react-bootstrap';
import "./volunter.css";
import img1 from "../../asset/v1.jpg";
import img2 from "../../asset/v2.jpg";
import img3 from "../../asset/v3.jpg";
import img4 from "../../asset/v4.jpg";
const Volunter = () => {

    const volunteers = [{
        id:1,
        name: "Mr Ayodeji Oluwafemi",
        img: img4,
        content: "A senior Pastor, Mission and evangelism coordinator."
    },
    {
        id:2,
        name: "Mr Oyewole Oyelayo ",
        img: img3,
        content: "He is the vice president and co- founder of Naomi Hope Foundation."
    },
    {
        id:3,
        name: "Mrs Oluwaseun Adeyeye ",
        img: img1,
        content: "She is the head of administrative unit of Naomi Hope foundation."
    },
    {
        id:4,
        name: "Mrs Olawumi Oyelayo",
        img: img2,
        content: "She is the founder and president of Naomi Hope Foundation."
    }];

  const  Vol = volunteers.map((v)=>{
        return (
            <Col key={v.id} lg={6} md={6} sm={12}>
            <Card className="card-card-t border-0">
          <div className='img-desc'>
          <Card.Img variant="top" src={v.img} />
          </div>
            <Card.Body>
                <Card.Title className='card-t text-center'>{v.name}</Card.Title>
                <Card.Text>
               {v.content}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
 
            </Col>
        )
    })
  return (
    <div className='volunteer-wrap'>
        <div className='volunteer-top text-center'>
            <h2>Meet Our Volunteer</h2>
           
        </div>
        <div className='volunteers'>
        <Row>
         {Vol}
       </Row>
        </div>
    </div>
  )
}

export default Volunter