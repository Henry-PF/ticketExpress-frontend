import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getRoutes } from "../../../Redux/actions";

export default function Card(props) {
    const dispatch = useDispatch();
    const terminals = useSelector(state => state.cities);

    useEffect(() => {
        dispatch(getCities());
    }, [dispatch])


    const hora_salida = new Date(`2000-01-01T${props.hora_salida}`);
    const hora_llegada = new Date(`2000-01-01T${props.hora_llegada}`);

    // Si la hora de llegada es anterior a la hora de salida, ajusta la fecha de llegada al día siguiente
    if (hora_llegada < hora_salida) {
        hora_llegada.setDate(hora_llegada.getDate() + 1);
    }

    // Calcula la diferencia en milisegundos entre la hora de llegada y la hora de salida
    const timeDifference = hora_llegada - hora_salida;

    // Convierte la diferencia en horas y minutos
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    // Formatea el tiempo de viaje
    const travelTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    // Configura el idioma de moment
    moment.locale("es");

    // Convierte la fecha de salida y hora de salida al formato deseado
    const fecha_salidaFormatted = moment(props.fecha_salida, "DD/MM/YYYY").format("dddd DD/MM");
    const hora_salidaFormatted = moment(props.hora_salida, "HH:mm").format("HH:mm");

    // Calcula la fecha y hora de llegada sumando el tiempo de viaje
    const fecha_salidaTime = moment(props.fecha_salida + " " + props.hora_salida, "DD/MM/YYYY HH:mm");
    const arrivalDateTime = fecha_salidaTime.clone().add(travelTime, "hours");

    // Comprueba si la hora de llegada es anterior a la hora de salida y ajusta la fecha en consecuencia
    if (arrivalDateTime.isBefore(fecha_salidaTime)) {
        arrivalDateTime.add(1, "day");
    }

    // Convierte la fecha de llegada al formato deseado
    const arrivalDateFormatted = arrivalDateTime.format("dddd DD/MM");

    const url = `/ticket_detail/${encodeURIComponent(props.origin)}/${encodeURIComponent(props.destination)}/${encodeURIComponent(props.fecha_salida)}/${encodeURIComponent(props.hora_salida)}/${encodeURIComponent(props.hora_llegada)}/${encodeURIComponent(props.precio)}`;





    return (

        <div className={styles.container}>
            <div className={styles.div}>
                <div>
                    <h2 className="m-0">Empresa</h2> {/*NOMBRE DE LA EMPRESA*/}
                </div>

                <div className={styles.data_ticket}>
                    <h4 className={styles.txt}>{terminals?.map(terminal => props.origin === terminal.id ? terminal.nombre : '')}</h4>
                    <h5 className={styles.data}>Sale el {fecha_salidaFormatted}</h5> {/*FECHA DE SALIDA*/}
                    <h1 className={styles.hour}>{hora_salidaFormatted}<span className={styles.hs}>HS</span></h1> {/*HORARIO DE SALIDA*/}
                    <h5 className={styles.txt}>Horario de Salida</h5>
                </div>

                <div className="text-center">
                    <FontAwesomeIcon icon={faArrowRightLong} size="2xl" style={{ color: "#fff", }} />
                    <p className="m-0">Tiempo de Viaje</p>
                    <p>{travelTime}</p>
                </div>

                <div className={styles.data_ticket}>
                    <h4 className={styles.txt}>{terminals?.map(terminal => props.destination === terminal.id ? terminal.nombre : '')}</h4>
                    <h5 className={styles.data}>Llega el {arrivalDateFormatted}</h5> {/*FECHA DE LLEGADA*/}
                    <h1 className={styles.hour}>{props.hora_llegada}<span className={styles.hs}>HS</span></h1> {/*HORARIO DE LLEGADA*/}
                    <h5 className={styles.txt}>Horario de Llegada</h5>
                </div>

                <div>
                    <h4 className={styles.seats}>Butacas Libres <span className={styles.seat}>{10}</span></h4> {/*BUTACAS DISPONIBLES*/}
                    <h2>${props.precio}</h2>
                </div>
            </div>
            <div className={styles.ticket_info}>
                <h4>Semi-Cama</h4>
            </div>

            <Link to={url} className={styles.btn}>Comprar</Link>
        </div>
    )
}