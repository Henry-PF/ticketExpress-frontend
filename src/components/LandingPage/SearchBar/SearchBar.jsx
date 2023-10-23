import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import CreatableSelect from 'react-select/creatable';
import Form from 'react-bootstrap/Form';
import { getCities, getProvince, searchResults } from '../../../Redux/actions';
import { FiUserPlus } from 'react-icons/fi'
import { BsSearch, BsPlus, BsDash } from 'react-icons/bs'

import styles from './searchBar.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';


const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cities = useSelector(state => state.cities.data);
    const province = useSelector(state => state.province.data);

    let data = [];

    if (cities && province) {
        data = [...cities, ...province];
    }

    const [startDate, setStartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const [searchQuery, setSearchQuery] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: ''
    });

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        count <= 1 ? setCount(1) : setCount(count - 1);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchResults(searchQuery));
        navigate('/results');
    };

    const handleDate = (date) => {
        const formatDate = date.toLocaleDateString().split('T')[0];
        setStartDate(date)
        setSearchQuery({ ...searchQuery, departureDate: formatDate })
    }
    const handleReturnDate = (date) => {
        const formatDate = date.toLocaleDateString().split('T')[0];
        setReturnDate(date)
        setSearchQuery({ ...searchQuery, returnDate: formatDate })
    }

    useEffect(() => {
        dispatch(getCities());
        dispatch(getProvince());
    }, [dispatch])

    return (
        <>
            <Form className={styles.form} onSubmit={handleSearch}>
                <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                    <Form.Label className='text-white'>Ciudad de Origen</Form.Label>
                    <Select
                        className={styles.form_input}
                        isClearable
                        options={data?.map(city => ({
                            value: city.nombre,
                            label: city.nombre
                        }))}
                        placeholder='Ciudad de Origen'
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setSearchQuery({ ...searchQuery, origin: selectedOption.value });
                            } else {
                                setSearchQuery({ ...searchQuery, origin: '' });
                            }
                        }}
                        required

                    />
                </Form.Group>
                <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                    <Form.Label className='text-white'>Ciudad de Destino</Form.Label>
                    <Select
                        className={styles.form_input}
                        isClearable
                        options={data?.map(city => ({
                            value: city.nombre,
                            label: city.nombre
                        }))}
                        placeholder='Ciudad de Destino'
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setSearchQuery({ ...searchQuery, destination: selectedOption.value });
                            } else {
                                setSearchQuery({ ...searchQuery, destination: '' });
                            }
                        }}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.formGroup} controlId="formBasicPassword">
                    <Form.Label className='text-white'>Salida</Form.Label>
                    <DatePicker
                        className={styles.select}
                        selected={startDate}
                        onChange={(date) => handleDate(date)}
                        minDate={new Date()}
                        // maxDate={addMonths(new Date(), 1)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText='Fecha de Salida'
                        showDisabledMonthNavigation
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.formGroup} controlId="formBasicPassword">
                    <Form.Label className='text-white'>Regreso(Opcional)</Form.Label>
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => handleReturnDate(date)}
                        minDate={new Date()}
                        // maxDate={addMonths(new Date(), 1)}
                        dateFormat="dd/MM/yyyy"
                        className={styles.select}
                        placeholderText='Fecha de Salida'
                        showDisabledMonthNavigation
                    />
                </Form.Group>
                <Form.Group className={styles.formGroup} controlId="formBasicPassword">
                    <Form.Label className='text-white'>Pasajero/s</Form.Label>
                    <div className={styles.formGroupCount}>
                        <button className={styles.btn_count} type="button" onClick={decrement}><BsDash className={styles.btn_icon} /></button>
                        <Form.Control
                            className={styles.count}
                            type="text"
                            value={count}
                            placeholder="1"
                            min={1} />
                        <button className={styles.btn_count} type="button" onClick={increment}><BsPlus className={styles.btn_icon} /></button>
                    </div>
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