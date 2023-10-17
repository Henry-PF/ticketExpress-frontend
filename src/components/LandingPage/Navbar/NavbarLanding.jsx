import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
//----------Boostrap----------
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FloatingLabel } from 'react-bootstrap';
//----------React-icons----------
import { FcGoogle } from 'react-icons/fc';
//----------Styles----------
import styles from './navbar.module.css'

const NavbarLanding = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar expand="lg" className={styles.navbar}>
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} className={styles.logo} alt="Logo Ticket Express" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="my-2 my-lg-0 "
                            navbarScroll
                        >
                            <Nav.Link className={styles.nav_links} href="/">HOME</Nav.Link>
                            {/* <Nav.Link className={styles.nav_links} href="/create_route">CREAR RUTA</Nav.Link> */}
                            <Nav.Link className={styles.nav_links} href="#">SOBRE NOSOTROS</Nav.Link>
                            <Nav.Link className={styles.nav_links} href="#" onClick={() => setShow(!show)}>
                                INICIAR SESIÓN
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
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-4">
                                <Form.Control className={styles.form_input} type="email" placeholder="Email" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Contraseña" className="mb-4">
                                <Form.Control className={styles.form_input} type="password" placeholder="Contraseña" />
                            </FloatingLabel>
                            <Button className={styles.btn_submit} type="submit">
                                INICIAR SESIÓN
                            </Button>
                            <Button className={styles.btn_google} type="button">
                                <FcGoogle className={styles.google_logo} />
                                Sign in with Google
                            </Button>
                        </Form>
                        <div className='d-flex flex-column'>
                            <p>¿Eres nuevo en TicketExpress? <a href="/register">Registrarse</a></p>
                            <p>Ovidaste tu contraseña? <a href="#">Recuperar Contraseña</a></p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default NavbarLanding