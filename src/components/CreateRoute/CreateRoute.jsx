import React, { useState } from 'react'
import NavbarLanding from '../LandingPage/Navbar/NavbarLanding';
// React Bootstrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './createRoute.module.css'

const CreateRoute = () => {

    const [data, setData] = useState({
        origin: '',
        destination: '',
        exitTime: '',
        arrivalTime: '',
        company: '',
        price: 0,
    })

    const exitTime = new Date(`2000-01-01T${data.exitTime}`);
    const arrivalTime = new Date(`2000-01-01T${data.arrivalTime}`);

    console.log(`${Math.floor((arrivalTime - exitTime) / (1000 * 60 * 60))}:${Math.floor(((arrivalTime - exitTime) % (1000 * 60 * 60)) / (1000 * 60))}`);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <NavbarLanding />
            <h1 className='text-center m-5'>Crear Ruta</h1>
            <Form className={styles.container}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Ciudad de Origen" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Ciudad de Origen"
                                name='origin'
                                value={data.origin}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Ciudad de Destino" className="w-100 ">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Ciudad de Destino"
                                name='destination'
                                value={data.destination}
                                onChange={handleChange} />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingPassword" label="Horario de Salida" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="time"
                                placeholder="Horario de Salida"
                                name='exitTime'
                                value={data.exitTime}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Horario de Llegada" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="time"
                                placeholder="Horario de Llegada"
                                name='arrivalTime'
                                value={data.arrivalTime}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Empresa" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Empresa"
                                name='company'
                                value={data.company}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Valor del Ticket" className="w-100">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Valor del Ticket"
                                name='price'
                                value={data.price}
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                    </div>
                    <Button className='w-100 my-4' variant="primary" type="submit">
                        Crear Ruta
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default CreateRoute