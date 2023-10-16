import React from 'react'
// React Bootstrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Navbar from '../LandingPage/Navbar/NavbarLanding'
// Styles
import styles from './register.module.css'

const Register = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center m-5'>Registro</h1>
            <Form className={styles.container}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Nombre" className="w-100 me-2">
                            <Form.Control className={styles.form_input} type="text" placeholder="Nombre" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Apellido" className="w-100 ">
                            <Form.Control className={styles.form_input} type="text" placeholder="Apellido" />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingPassword" label="Tipo de Documento" className="w-100 me-2">
                            <Form.Select className={styles.form_input} aria-label="Default select example">
                                <option value="1">DNI</option>
                                <option value="3">Cédula</option>
                                <option value="2">Pasaporte</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Número de Documento" className="w-100 ">
                            <Form.Control className={styles.form_input} type="text" placeholder="Número de Documento" />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Email" className="w-100 me-2">
                            <Form.Control className={styles.form_input} type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="w-100">
                            <Form.Control className={styles.form_input} type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Teléfono (Opcional)" className="w-50 me-2">
                            <Form.Control className={styles.form_input} type="phone" placeholder="Teléfono (Opcional)" />
                        </FloatingLabel>
                    </div>
                    <Button className='w-100 my-4' variant="primary" type="submit">
                        Crear Cuenta
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default Register