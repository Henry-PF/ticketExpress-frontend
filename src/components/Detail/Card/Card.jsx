import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

export default function Card(){ //recibira datos como id, empresa, origen, destino, categoria, butacas libres, precio (ver bien DB)
    return(
        <div className={styles.div}>
            <div>
                <h2>Empresa</h2> {/*NOMBRE DE LA EMPRESA*/}
            </div>

            <div>
                <h4>Origen</h4>
                <h5>Sale Lun 00/00</h5> {/*FECHA DE SALIDA*/}
                <h4>00:00</h4> {/*HORARIO DE SALIDA*/}
                <h5>Horario de Salida</h5>
                <h4>Semi-Cama</h4> {/*CATEGORIA DE BONDI*/}
            </div>

            <div>
                <FontAwesomeIcon icon={faArrowRightLong} size="2xl" style={{color: "#fff",}} />
            </div>

            <div>
                <h4>Destino</h4>
                <h5>Llega Lun 00/00</h5> {/*FECHA DE LLEGADA*/}
                <h4>00:00</h4> {/*HORARIO DE LLEGADA*/}
                <h5>Horario de Llegada</h5>
                <h4>Butacas Libres = 10</h4> {/*BUTACAS DISPONIBLES*/}
            </div>

            <div>
                <h2>$10000</h2> {/*PRECIO DEL BOLETO*/}
                <button type="button" class="btn btn-danger" className={styles.button}>Comprar</button>
            </div>
        </div>
    )
}