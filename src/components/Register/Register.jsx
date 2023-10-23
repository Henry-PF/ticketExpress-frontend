import React from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
// React Bootstrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Navbar from '../LandingPage/Navbar/NavbarLanding'
// Styles
import styles from './register.module.css'
import { userRegister } from '../../Redux/actions';

const Register = () => {

    const dispatch = useDispatch();

    const onSubmit = (values, actions) => {
        const formData = new FormData();

        const dataCliente = {
            nick: values.nombre,
            password: values.password,
            nombre: values.nombre,
            apellido: values.apellido,
            correo: values.correo,
            dni: values.dni,
            telefono: values.telefono,
            direccion: values.direccion
        }

        formData.append('data', JSON.stringify(dataCliente));
        formData.append('nick', values.nombre);
        formData.append('password', values.password);

        dispatch(userRegister(formData));

        // swal("Registrado!");
        console.log("Submitted!", values);
        actions.resetForm()
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        // Valores iniciales que vamos a tener en nuestro formulario
        initialValues: { nombre: "", apellido: "", dni: "", correo: "", password: "", telefono: "", direccion: "" },
        // Esquema de validaciones, que declaramos e importamos

        // Funcion onSubmit que tomara el lugar en cualquier handleSubmit
        onSubmit
    })

    return (
        <>
            <Navbar />
            <h1 className='text-center m-5'>Registro</h1>
            <Form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Nombre" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Nombre"
                                name='nombre'
                                value={values.nombre}
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
                                value={values.apellido}
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
                                value={values.dni}
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
                                value={values.telefono}
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
                                value={values.direccion}
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
                                value={values.correo}
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
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                required
                            />
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