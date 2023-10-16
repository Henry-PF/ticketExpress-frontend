import React from 'react'

import Card from 'react-bootstrap/Card';

import { FaPiggyBank } from 'react-icons/fa'
import { BiBed } from 'react-icons/bi'
import { BsShieldCheck } from 'react-icons/bs'
import { CiMobile3 } from 'react-icons/ci'

import styles from './reasons.module.css'

const Reasons = () => {

    const reasons = [
        {
            title: 'Más barato',
            icon: <FaPiggyBank />,
            reason: 'Viajes en autobús hasta por menos de la mitad del precio de los tickets de estación de autobuses.',
        },
        {
            title: 'Más calidad',
            icon: <BiBed />,
            reason: 'Los autobuses de empresas colaboradoras se someten a pruebas de calidad. Además, disponemos de varias opciones de autobuses y asientos. para que puedas elegir el más cómodo para tu viaje.',
        },
        {
            title: 'Mas seguro',
            icon: <BsShieldCheck />,
            reason: 'Empresas de autobuses y conductores asociados capacitados y certificados por la CNRT . Seguros de vida gratuitos y autobuses con tecnologías de seguridad exclusivas, como cámaras de fatiga y telemetría. Significa llegar a tu destino de forma segura, con soporte las 24 horas , ¡cuando lo necesites! ',
        },
        {
            title: 'Más práctico',
            icon: <CiMobile3 />,
            reason: 'Sólo tienes que reservar a través de la web y tú eliges, embarca en  estación de autobuses. Sin colas, sin burocracia y si necesitas reprogramar, todo es fácil y con reembolso rápido. ¡Es viajar con la flexibilidad que necesitas!',
        },
    ]
    return (
        <>
            <div className={styles.container}>

                <h1 className='mb-5'>RAZONES PARA COMPRAR TUS TICKETS EN TICKETEXPRESS</h1>
                <ul className={styles.ul}>
                    {
                        reasons.map((reason, index) => (
                            <li className={styles.li} key={index}>
                                <Card style={{ width: '20rem', height: '21rem' }}>
                                    <Card.Body>
                                        <div className='d-flex align-items-center gap-2'>
                                            <Card.Title style={{ fontSize: '5rem', }}>{reason.icon}</Card.Title>
                                            <Card.Title style={{ fontSize: '2rem', }}>{reason.title}</Card.Title>
                                        </div>
                                        <Card.Text className='mt-2'>
                                            {reason.reason}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Reasons