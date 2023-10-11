import React, { useState } from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { IoMdClock } from 'react-icons/io'
import { MdEventSeat } from 'react-icons/md'
import { BsCreditCard2Front } from 'react-icons/bs'

import styles from './information.module.css'

const Information = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: 'Buscar origen y destino',
            text: 'Ingresa al buscador de servicios. Elige orígen, destino y fecha de tu viaje.',
            icon: <RiComputerLine className={styles.icon} />
        },
        {
            title: 'Seleccionar horario y empresa',
            text: 'Saliendo por la mañana, tarde o noche, selecciona el horario y empresa que mas te convenga.',
            icon: <IoMdClock className={styles.icon} />
        },
        {
            title: 'Seleccionar tu asiento',
            text: '¿Ventanilla o pasillo? Seleccionar la butaca de tu agrado.Puedes elegir entre distintas calidades como: Semi-cama, Cama. Primero selecciona tu lugar para la ida y luego para el regreso del viaje.',
            icon: <MdEventSeat className={styles.icon} />
        },
        {
            title: 'Realizá tu pago y recibí tu E-ticket ',
            text: 'Completa los datos de los pasajeros y del titular de tarjeta de crédito o débito. Realiza el pago y tus pasajes aparecerán en pantalla. Recibirás una copia de los mismos en tu casilla de email, debes mostrarlos al chofer en tu celu para subir al bus.',
            icon: <BsCreditCard2Front className={styles.icon} />
        },
    ];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className={styles.container}>
                <h1 className='m-5'>COMO COMPRAR PASAJES</h1>
                <ul className={styles.ul}>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            className={`${index === activeIndex ? styles.active : ''} ${styles.li}`}
                        >
                            {item.icon}
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.txt}>
                    <p>{items[activeIndex].text}</p>
                </div>
            </div>
        </>
    )
}

export default Information