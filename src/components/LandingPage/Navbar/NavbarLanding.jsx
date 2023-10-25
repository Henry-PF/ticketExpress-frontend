import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
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
import BtnUserLoggedIn from './BtnUserLoggedIn/BtnUserLoggedIn'
import styles from './styles.module.css'

const NavbarLanding = () => {

    const dispatch = useDispatch();

    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userData;

        try {
            const { data } = await axios.post('http://localhost:3001/auth/login', {
                correo: email,
                password: password,
            });

            if (data.error) {
                Swal.fire({
                    title: data.error,
                    icon: 'error'
                })
            }

            if (await data.token) {
                setToken(data)
                localStorage.setItem('token', data.token);
                localStorage.setItem('nombre', data.data.nombre);
                localStorage.setItem('apellido', data.data.apellido);
                localStorage.setItem('correo', data.data.correo);
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
        };
    }

    useEffect(() => {
        // Leer la cookie con la información del usuario
        const userData = Cookies.get('userData');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
        }
    }, []);

    return (
        <>
            <Navbar expand="lg" className={styles.navbar}>
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} className={styles.logo} alt="Logo Ticket Express" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="flex align-items-center my-2 my-lg-0 "
                            navbarScroll
                        >
                            <Nav.Link className={styles.nav_links} href="/">Home</Nav.Link>
                            <Nav.Link className={styles.nav_links} href="/create_route">Crear Ruta</Nav.Link>
                            <Nav.Link className={styles.nav_links} href="#">Sobre Nosotros</Nav.Link>
                            {
                                localStorage.getItem('token') || user
                                    ? localStorage.getItem('nombre') ? <BtnUserLoggedIn name={localStorage.getItem('nombre')} /> : <BtnUserLoggedIn name={user?.name.givenName} />
                                    : <Nav.Link className={styles.nav_links} href="#" onClick={() => setShow(!show)}>
                                        Iniciar Sesión
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Offcanvas show={show} onHide={() => setShow(!show)} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>SIGN IN</Offcanvas.Title>
                    </Offcanvas.Header>
                    <div className={styles.divider_line} />
                    <Offcanvas.Body>
                        <Form onSubmit={handleSubmit}>
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-4">
                                <Form.Control
                                    className={styles.form_input}
                                    type="email"
                                    placeholder="Email"
                                    onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                                />
                                {error ? <p className={styles.error}>{error}</p> : ''}
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Contraseña" className="mb-4">
                                <Form.Control
                                    className={styles.form_input}
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={(event) => setUserData({ ...userData, password: event.target.value })}
                                />
                            </FloatingLabel>
                            <Button type='submit' className={styles.btn_submit}>
                                INICIAR SESIÓN
                            </Button>

                        </Form>
                        <Link to='http://localhost:3001/auth/google' className={styles.btn_google} type="button">
                            <FcGoogle className={styles.google_logo} />
                            Sign in with Google
                        </Link>
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