import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import CreatableSelect from 'react-select/creatable';
import Form from 'react-bootstrap/Form';
import { getBoletos, getCities, searchResults } from '../../../Redux/actions';
import { FiUserPlus } from 'react-icons/fi'
import { BsSearch, BsPlus, BsDash } from 'react-icons/bs'

import styles from './searchBar.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';
import moment from 'moment';


const SearchBar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cities = useSelector(state => state.cities);
    // const province = useSelector(state => state.province.data);

    let data = [];

    if (cities) {
        data = [...cities];
    }

    const [startDate, setStartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [searchQuery, setSearchQuery] = useState({
        origen: '',
        destino: '',
        fecha_salida: '',
        fecha_regreso: '',
    });
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(getCities());
    }, [dispatch, startDate]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        count <= 1 ? setCount(1) : setCount(count - 1);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchResults(searchQuery));
        navigate(`/results`);
    };

    const handleDate = (date) => {
        if (date) {
            const formatDate = date.toLocaleDateString().split('T')[0];;
            setStartDate(date)
            setSearchQuery({ ...searchQuery, fecha_salida: formatDate })
        } else {
            setStartDate(null)
        }
    }

    const handleReturnDate = (date) => {
        const formatDate = date.toLocaleDateString().split('T')[0];
        setReturnDate(date)
        setSearchQuery({ ...searchQuery, fecha_regreso: formatDate })
    }

    return (
        <>
            <Form className={styles.form} onSubmit={handleSearch}>
                <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                    <Form.Label className='text-white'>Ciudad de Origen</Form.Label>
                    <Select
                        defaultValue={searchQuery.origen}
                        className={styles.form_input}
                        isClearable
                        options={data?.map(city => ({
                            value: city.id,
                            label: city.nombre
                        }))}
                        placeholder='Ciudad de Origen'
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setSearchQuery({ ...searchQuery, origen: selectedOption.value });
                            } else {
                                setSearchQuery({ ...searchQuery, origen: '' });
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
                            value: city.id,
                            label: city.nombre
                        }))}
                        placeholder='Ciudad de Destino'
                        onChange={(selectedOption) => {
                            if (selectedOption) {
                                setSearchQuery({ ...searchQuery, destino: selectedOption.value });
                            } else {
                                setSearchQuery({ ...searchQuery, destino: '' });
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
                        placeholderText='Fecha de Regreso'
                        showDisabledMonthNavigation
                        isClearable
                    />
                </Form.Group>
                {/* <Form.Group className={styles.formGroup} controlId="formBasicPassword">
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
                </Form.Group> */}
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