import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

import { FiUserPlus } from 'react-icons/fi'
import styles from './searchBar.module.css'

const SearchBar = () => {

    const [type, setType] = useState('text')

    const handleType = () => {
        setType('date')
    }

    return (
        <>
            <Form className={styles.form}>
                <Form.Group className='' controlId="formBasicEmail">
                    <Form.Control className={styles.form_input} type="text" placeholder="Ciudad de origen" />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Control className={styles.form_input} type="text" placeholder="Ciudad de destino" />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Control className={styles.form_input_date} type='text' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder="Fecha de Ida" />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Control className={styles.form_input_date} type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder="Fecha de vuelta" />
                </Form.Group>
                <Form.Group className='position-relative' controlId="formBasicPassword">
                    <Form.Control className={styles.form_input} type="number" placeholder="0" />
                    <FiUserPlus className='position-absolute top-50 start-0 translate-middle ms-3 ' />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Control className={styles.form_input} type="submit" placeholder="Buscar" />
                </Form.Group>
            </Form>
        </>
    )
}

export default SearchBar