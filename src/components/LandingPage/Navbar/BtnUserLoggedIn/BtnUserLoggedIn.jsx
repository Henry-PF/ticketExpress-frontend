import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'
import axios from 'axios';
import Cookies from 'js-cookie';

const BtnUserLoggedIn = (props) => {

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
        Cookies.remove('userData');
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownButton}>
                    Hola, {props.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="">Action</Dropdown.Item>
                    <Dropdown.Item href="">Another action</Dropdown.Item>
                    <Dropdown.Item href="">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className={styles.dropdownButton} onClick={handleClick}>Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default BtnUserLoggedIn