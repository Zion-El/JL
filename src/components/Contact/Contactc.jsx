import React, {useState, useEffect} from 'react'
import "./contact.css";
import { Row, Col, Form, Button } from 'react-bootstrap';
// import toastr from 'toastr';

import axios from 'axios';
const Contactc = () => {
  const initialValues = { firstName: "", lastName: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      const mailData = {
          Message : formValues.message,
          Fullname: formValues.fullname,
          Email: formValues.email,
          Telephone: formValues.phone_number
      }
      axios.post("https://sheetdb.io/api/v1/cfl2g8130l81k", mailData).then((response)=>{
       alert('Thank you for your response, we will get back to you shortly')
        setTimeout(function () {
          window.location.reload(1);
      }, 5000); 
        
      })
    };
  
    useEffect(() => {
    
      if (Object.keys(formErrors).length === 0 && isSubmit) {
       
    
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.message) {
        errors.message = "message  required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.phone_number) {
        errors.phone_number = "phone number  required";
      } 
      if (!values.fullname) {
        errors.fullname = "fullname  required";
      } 
      return errors;
    };
  return (
    <div className='contact-wrap'>
      <Row>
        <Col lg={8} md={6} sm={12}>
          <div className='form'>
            <h5>Get In Touch</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control as="textarea" rows={4} placeholder="Type your Message here" name="message" value={formValues.message} onChange={handleChange} />
                <p style={{color: "#A020F0", fontSize: "12px"}}>{formErrors.message}</p>
              </Form.Group>

              <Row>
                <Col lg={6} md={6} sm={12}>
                  <Form.Group className="mb-3">

                    <Form.Control type="text" placeholder="Enter Your Phone Number" name="phone_number" value={formValues.phone_number} onChange={handleChange}  />
                    <p style={{color: "#A020F0", fontSize: "12px"}}>{formErrors.phone_number}</p>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Form.Group className="mb-3" >

                    <Form.Control type="email" placeholder="Enter Your Email" name="email" value={formValues.email}
                            onChange={handleChange}/>
                    <p style={{color: "#A020F0", fontSize: "12px"}}>{formErrors.email}</p>
                  </Form.Group>
                </Col>
                <Form.Group className="mb-3" >

                  <Form.Control type="text" placeholder="Enter Your FullName" name="fullname" value={formValues.fullname} onChange={handleChange} />
                  <p style={{color: "#A020F0", fontSize: "12px"}}>{formErrors.fullname}</p>
                </Form.Group>
              </Row>

              <div className='text-center'>
                <Button className='btn-contact' type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className='contact-left'>
            <ul>
              <li><i className='fa fa-home'></i> <span> No 4 Unity close, Segun Kujore Estate,</span><b />
                <p>Off CMD Road, Magodo</p></li>
              <li><i className='fa fa-phone'></i> <span>+2348038231531</span><b /></li>

              <li><i className='fa fa-envelope'></i> naomihopefoundation22@gmail.com<span> </span><b /></li>

            </ul>
            <div className='donatee'>
              <h3>To Donate !!!</h3>
              <p>Naomi Hope Foundation Ltd</p>
              <p>0547272639</p>
              <p>Sterling Bank Plc</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contactc
