import React, { useState } from 'react'
//----------Boostrap----------
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
//----------React-icons----------
import { FcGoogle } from 'react-icons/fc';
//----------Styles----------
import styles from './navbar.module.css'

const NavbarLanding = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">TicketExpress</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="my-2 my-lg-0 "
                            navbarScroll
                        >
                            <Nav.Link href="#">HOME</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                            <Nav.Link href="#">ABOUT US</Nav.Link>
                            <Nav.Link href="#" onClick={() => setShow(!show)}>
                                SIGN IN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Offcanvas show={show} onHide={() => setShow(!show)} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>SIGN IN</Offcanvas.Title>
                    </Offcanvas.Header>
                    <div className={styles.divider_line} />
                    <Offcanvas.Body>
                        <Form>
                            <Form.Group className='mb-4' controlId="formBasicEmail">
                                <Form.Control className={styles.form_input} type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className='mb-4' controlId="formBasicPassword">
                                <Form.Control className={styles.form_input} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className={styles.btn_submit} type="submit">
                                Submit
                            </Button>
                            <Button className={styles.btn_google} type="button">
                                <FcGoogle className={styles.google_logo} />
                                Sign in with Google
                            </Button>
                        </Form>
                        <div className='d-flex flex-column'>
                            <p className=''>¿Eres nuevo en TicketExpress? <a href="">Registrarse</a></p>
                            <p>Ovidaste tu contraseña? <a href="">Recuperar Contraseña</a></p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default NavbarLanding