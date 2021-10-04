import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_OiuNBZ6IiwQi5rKwdMkWB");

export default function UnderConstruction() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm('service_h71kikp', 'template_9u7bpal', form.current, 'user_OiuNBZ6IiwQi5rKwdMkWB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div id="underconstruction">

            <h1 id="construction-page">Website Under Construction</h1>



            <Button id="sendupdatesBtn" onClick={handleShow}>
                Send Me Updates <i class="fas fa-bullhorn"></i>
            </Button>


            <Modal show={show} onHide={handleClose} id="send-updates-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Would you like to recieve emails on site updates? 📧</Modal.Title>
                </Modal.Header>
                <Form ref={form} onSubmit={sendEmail} className="site-updates">
                    <Form.Group as={Row}  controlId="exampleForm.ControlInput1">
                        <Form.Label column md="6" >Name:</Form.Label>
                        <Form.Control name="user_name" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                        <Form.Label column md="6" >Email address:</Form.Label>
                        <Form.Control column md="6"name="user_email" type="email" placeholder="name@example.com" />
                    </Form.Group>
                    {/* <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm="2">Message:</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} placeholder="Type me a message!" />
                    </Form.Group> */}
                    <Button type="submit " value="Send" >Send <i class="fas fa-paper-plane"></i></Button>
                    <br></br>
                    {message && <span id="submit-message">We'll send you updates! Check out more projects at <a href="https://github.com/kwing25">GitHub</a> or my <a href="https://kendrawing-portfolio.netlify.app/">Website</a> 👉</span>}
                </Form>



            </Modal>

        </div>
    )
}