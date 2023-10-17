import React from "react";
import moment from "moment";
import "moment/locale/es";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) { //recibira datos como id, empresa, origen, destino, categoria, butacas libres, precio (ver bien DB)
    const departureTime = new Date(`2000-01-01T${props.departureTime}`);
    const arrivalTime = new Date(`2000-01-01T${props.arrivalTime}`);

    // Si la hora de llegada es anterior a la hora de salida, ajusta la fecha de llegada al día siguiente
    if (arrivalTime < departureTime) {
        arrivalTime.setDate(arrivalTime.getDate() + 1);
    }

    // Calcula la diferencia en milisegundos entre la hora de llegada y la hora de salida
    const timeDifference = arrivalTime - departureTime;

    // Convierte la diferencia en horas y minutos
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    // Formatea el tiempo de viaje
    const travelTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    // Configura el idioma de moment
    moment.locale("es");

    // Convierte la fecha de salida y hora de salida al formato deseado
    const departureDateFormatted = moment(props.departureDate).format("dddd DD/MM");
    const departureTimeFormatted = moment(props.departureTime, "HH:mm").format("HH:mm");

    // Calcula la fecha y hora de llegada sumando el tiempo de viaje
    const departureDateTime = moment(props.departureDate + " " + props.departureTime, "YYYY-MM-DD HH:mm");
    const arrivalDateTime = departureDateTime.clone().add(travelTime, "hours");

    // Comprueba si la hora de llegada es anterior a la hora de salida y ajusta la fecha en consecuencia
    if (arrivalDateTime.isBefore(departureDateTime)) {
        arrivalDateTime.add(1, "day");
    }

    // Convierte la fecha de llegada al formato deseado
    const arrivalDateFormatted = arrivalDateTime.format("dddd DD/MM");

    return (

        <div className={styles.container}>
            <div className={styles.div}>
                <div>
                    <h2>Empresa</h2> {/*NOMBRE DE LA EMPRESA*/}
                </div>

                <div className={styles.data_ticket}>
                    <h4 className={styles.txt}>{props.origin}</h4>
                    <h5 className={styles.data}>Sale el {departureDateFormatted}</h5> {/*FECHA DE SALIDA*/}
                    <h1 className={styles.hour}>{departureTimeFormatted}<span className={styles.hs}>HS</span></h1> {/*HORARIO DE SALIDA*/}
                    <h5 className={styles.txt}>Horario de Salida</h5>
                </div>

                <div className="text-center">
                    <FontAwesomeIcon icon={faArrowRightLong} size="2xl" style={{ color: "#fff", }} />
                    <p className="m-0">Tiempo de Viaje</p>
                    <p>{travelTime}</p>
                </div>

                <div className={styles.data_ticket}>
                    <h4 className={styles.txt}>{props.destination}</h4>
                    <h5 className={styles.data}>Llega el {arrivalDateFormatted}</h5> {/*FECHA DE LLEGADA*/}
                    <h1 className={styles.hour}>{props.arrivalTime}<span className={styles.hs}>HS</span></h1> {/*HORARIO DE LLEGADA*/}
                    <h5 className={styles.txt}>Horario de Llegada</h5>
                </div>

                <div>
                    <h4 className={styles.seats}>Butacas Libres <span className={styles.seat}>{10}</span></h4> {/*BUTACAS DISPONIBLES*/}
                    <h2>$10000</h2> {/*PRECIO DEL BOLETO*/}
                </div>
            </div>
            <div className={styles.ticket_info}>
                <h4>Semi-Cama</h4> {/*CATEGORIA DE BONDI*/}
            </div>
            <Link to={`/ticket_detail/${props.id}`} className={styles.btn}>Comprar</Link>
        </div>
    )
}