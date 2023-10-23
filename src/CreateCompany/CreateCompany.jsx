import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../CreateCompany/CreateCompany.module.css';

export default function CreateCompany(){
    return (
        <div>
            <h1 className='text-center m-5'>Crear Empresa</h1>
            <Form className={styles.container}>
                <div className={styles.input_container}>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Nombre" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Nombre"
                                name='name'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                                
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Direccion" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="text"
                                placeholder="Direccion"
                                name='address'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/ />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="Correo Electronico" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="email"
                                placeholder="Correo Electronico"
                                name='mail'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Telefono" className="w-100 me-2">
                            <Form.Control
                                className={styles.form_input}
                                type="number"
                                placeholder="Numero de Telefono"
                                name='phone'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                    </div>
                    <div className={styles.input_name}>
                        <FloatingLabel controlId="floatingInput" label="CUIT" className="w-100 me-6">
                            <Form.Control
                                className={styles.form_input}
                                type="number"
                                placeholder="CUIT"
                                name='cuit'
                                /*POR AHORA SIN VALUE NI ON CHANGE*/
                            />
                        </FloatingLabel>
                    </div>
                    <Button className='w-100 my-4' variant="primary" type="submit">
                        Crear Empresa
                    </Button>
                </div>
            </Form>
            <div className={styles.botonBack}>
                <a href="/" class="btn btn-primary" role="button" data-bs-toggle="button">Volver</a>
            </div>
        </div>
    )
}
