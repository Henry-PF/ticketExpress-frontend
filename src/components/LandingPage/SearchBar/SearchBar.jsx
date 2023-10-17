import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { searchResults } from '../../../Redux/actions';
import { FiUserPlus } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'

import styles from './searchBar.module.css'
import { Button } from 'react-bootstrap';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();

        dispatch(searchResults(searchQuery));
        navigate('/results');
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Form className={styles.form} onSubmit={handleSearch}>
                <Form.Group className='' controlId="formBasicEmail">
                    <Form.Label className='text-white'>Ciudad de Origen</Form.Label>
                    <Form.Control
                        className={styles.form_input}
                        type="text"
                        placeholder="Ciudad de origen"
                        name="origin"
                        value={searchQuery.origin}
                        onChange={(event) => setSearchQuery({ ...searchQuery, origin: event.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className='' controlId="formBasicEmail">
                    <Form.Label className='text-white'>Ciudad de Destino</Form.Label>
                    <Form.Control
                        className={styles.form_input}
                        type="text"
                        placeholder="Ciudad de Destino"
                        name="destination"
                        value={searchQuery.destination}
                        onChange={(event) => setSearchQuery({ ...searchQuery, destination: event.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Label className='text-white'>Salida</Form.Label>
                    <Form.Control
                        className={styles.form_input_date}
                        type="date"
                        min={today}
                        placeholder="Fecha de Ida"
                        onChange={(event) => setSearchQuery({ ...searchQuery, departureDate: event.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Label className='text-white'>Regreso(Opcional)</Form.Label>
                    <Form.Control
                        className={styles.form_input_date}
                        type="date"
                        min={today}
                        placeholder="Fecha de vuelta"
                        onChange={(event) => setSearchQuery({ ...searchQuery, returnDate: event.target.value })}
                    />
                </Form.Group>
                <Form.Group className='position-relative' controlId="formBasicPassword">
                    <Form.Label className='text-white'>Pasajero/s</Form.Label>
                    <Form.Control className={styles.form_input} type="number" placeholder="1" min={1} />
                    {/* <FiUserPlus className='position-absolute top-75 start-0 translate-middle ms-3 ' /> */}
                </Form.Group>
                <Form.Label></Form.Label>
                <Form.Group className='' controlId="formBasicPassword">
                    <Form.Label><Form.Label></Form.Label></Form.Label>
                    <Button className={styles.btn_submit} type="submit" placeholder="Buscar"><BsSearch className='me-2' /> Buscar</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default SearchBar