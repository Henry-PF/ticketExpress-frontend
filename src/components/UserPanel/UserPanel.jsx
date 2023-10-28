import React, { useEffect, useState } from 'react'
import NavbarLanding from '../LandingPage/Navbar/NavbarLanding'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import styles from './styles.module.css'
import Cookies from 'js-cookie'

const UserPanel = () => {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        dni: '',
        direccion: '',
        telefono: '',
    })

    useEffect(() => {
        if (localStorage) {
            setUser({
                ...user,
                nombre: localStorage.getItem('nombre'),
                apellido: localStorage.getItem('apellido'),
                correo: localStorage.getItem('correo'),
                direccion: localStorage.getItem('direccion'),
                telefono: localStorage.getItem('telefono'),
                dni: localStorage.getItem('dni')
            })
        }
        else {
            const userData = Cookies.get('userData');
            if (userData) {
                const parsedUser = JSON.parse(userData);
                console.log(parsedUser);
                setUser(parsedUser);
            }
        }



        const userData = Cookies.get('userData');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
        }
    }, []);

    console.log(user);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <>
            <NavbarLanding />
            <div>
                <Form className={styles.container} onSubmit={handleSubmit}>
                    <div className={styles.input_container}>
                        <div className={styles.input_name}>
                            <FloatingLabel controlId="floatingInput" label="Nombre" className="w-100 me-2">
                                <Form.Control
                                    className={styles.form_input}
                                    type="text"
                                    placeholder="Nombre"
                                    name='nombre'
                                    value={user.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Apellido" className="w-100 ">
                                <Form.Control
                                    className={styles.form_input}
                                    type="text"
                                    placeholder="Apellido"
                                    name='apellido'
                                    value={user.apellido}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>
                        </div>
                        <div className={styles.input_name}>
                            <FloatingLabel controlId="floatingPassword" label="Número de Documento" className="w-100 me-2">
                                <Form.Control
                                    className={styles.form_input}
                                    type="text"
                                    placeholder="Número de Documento"
                                    name="dni"
                                    value={user.dni}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Teléfono (Opcional)" className="w-100">
                                <Form.Control
                                    className={styles.form_input}
                                    type="phone"
                                    placeholder="Teléfono (Opcional)"
                                    name="telefono"
                                    value={user.telefono}
                                    onChange={handleChange}
                                />
                            </FloatingLabel>
                        </div>
                        <div className={styles.input_name}>
                            <FloatingLabel controlId="floatingInput" label="Dirección" className="w-100">
                                <Form.Control
                                    className={styles.form_input}
                                    type="text"
                                    placeholder="Dirección"
                                    name="direccion"
                                    value={user.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>
                        </div>
                        <div className={styles.input_name}>
                            <FloatingLabel controlId="floatingInput" label="Email" className="w-100">
                                <Form.Control
                                    className={styles.form_input}

                                    type="email"
                                    placeholder="name@example.com"
                                    name="correo"
                                    value={user.correo}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                        </div>
                        <div className={styles.input_name}>
                            <FloatingLabel controlId="floatingPassword" label="Contaseña" className="w-100">
                                <Form.Control
                                    className={styles.form_input}
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>
                        </div>
                        <Button className='w-100 my-4' variant="primary" type="submit">
                            Crear Cuenta
                        </Button>
                    </div>
                </Form >
            </div>


        </>
    )
}

export default UserPanel