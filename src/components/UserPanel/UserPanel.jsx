import React, { useEffect, useState } from 'react'
import NavbarLanding from '../LandingPage/Navbar/NavbarLanding'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import styles from './styles.module.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import { getUserByEmail } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const UserPanel = () => {

    const googleEmail = Cookies.get('userData')

    useEffect(() => {
        axios.post('http://localhost:3001/usuarios/getUserCorreo', { email: localStorage.getItem('correo') || JSON.parse(googleEmail).emails[0]?.value })
            .then(response => setUser({
                ...user,
                id: response.data.data.id,
                nombre: response.data.data.nombre,
                apellido: response.data.data.apellido,
                correo: response.data.data.correo,
                dni: response.data.data.dni,
                direccion: response.data.data.direccion,
                telefono: response.data.data.telefono
            }))
    }, []);

    const [user, setUser] = useState({
        id: '',
        nombre: '',
        apellido: '',
        correo: '',
        dni: '',
        direccion: '',
        telefono: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await axios.put('http://localhost:3001/usuarios/update_user', user);
            if (data.status === 200) {
                Swal.fire({
                    title: data.data.message,
                    icon: 'success'
                })
                // setShow(false);
            } else {
                Swal.fire({
                    title: data.data.message,
                    icon: 'error'
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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
                                    onChange={event => handleChange(event)}
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