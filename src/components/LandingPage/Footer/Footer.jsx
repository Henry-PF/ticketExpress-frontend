import React from 'react'
import logo from '../../../assets/logo.png'

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.item1}>
                    <h4>Atención al cliente</h4>
                    <a href="">¿Como Comprar Pasajes?</a>
                    <a href="">Preguntas Frecuentes</a>
                    <a href="">Promociones</a>
                    <a href="">Devoluciones</a>
                </div>
                <div className={styles.item1}>
                    <h4>Mi Viaje</h4>
                    <a href="">Mis tickets</a>
                    <a href="">Devoluciones</a>
                    <a href="">Servicios adicionales</a>
                </div>
                <div className={styles.item1}>
                    <h4>Empresas y servicios</h4>
                    <a href="">Empresas de buses</a>
                    <a href="">Servicios de buses</a>
                    <a href="">Condiciones comerciales</a>
                    <a href="">Corporativo</a>
                    <a href="">Institucional</a>
                </div>
                <div className={styles.item1}>
                    <h4>Seguinos</h4>
                    <a href=""><FaFacebookF /> facebook</a>
                    <a href=""><FaXTwitter /> Twitter</a>
                    <a href=""><FaInstagram /> Instagram</a>
                </div>
            </footer>
        </>
    )
}

export default Footer