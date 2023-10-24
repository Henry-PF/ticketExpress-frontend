import React from 'react';
import { Container, Card, Button, ButtonGroup } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import styles from "./TicketDetail.module.css"

const TicketDetail = () => {
    const { id } = useParams();

    const results = useSelector(state => state.results);

    const ticket = results.data?.find((result) => result.id == id);

    const hora_salida = new Date(`2000-01-01T${ticket.hora_salida}`);
    const hora_llegada = new Date(`2000-01-01T${ticket.hora_llegada}`);

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
    const departureDateFormatted = moment(ticket.fecha_salida, "DD/MM/YYYY").format("dddd DD/MM");
    const hora_salidaFormatted = moment(ticket.hora_salida, "HH:mm").format("HH:mm");

    // Calcula la fecha y hora de llegada sumando el tiempo de viaje
    const departureDateTime = moment(ticket.fecha_salida + " " + ticket.hora_salida, "DD/MM/YYYY HH:mm");
    const arrivalDateTime = departureDateTime.clone().add(travelTime, "hours");

    // Comprueba si la hora de llegada es anterior a la hora de salida y ajusta la fecha en consecuencia
    if (arrivalDateTime.isBefore(departureDateTime)) {
        arrivalDateTime.add(1, "day");
    }

    // Convierte la fecha de llegada al formato deseado
    const arrivalDateFormatted = arrivalDateTime.format("dddd DD/MM");

    return (
        <Container className={styles.main}>
            <Card className={styles.card}>
                <ButtonGroup className={styles.butonsGroup}>
                    <Button className={styles.buttons} >Ida</Button>
                    <Button className={styles.buttons} >Vuelta</Button>
                </ButtonGroup>
                <div className={styles.trip}>
                    <p className={styles.parrafo}>De <span>{ticket.origin}</span></p>
                    <p className={styles.parrafo}>A <span>{ticket.destination}</span></p>
                </div>
                <div className={styles.divHorarios}>
                    <div className={styles.subDivHorarios}>
                        <p>Horario de Salida</p>
                        <h5> {ticket.hora_salida} hs</h5>
                        <p>{departureDateFormatted}</p>
                    </div>
                    <div className={styles.subDivHorarios}>
                        <p>Horario de Llegada</p>
                        <h5> {ticket.hora_llegada} hs</h5>
                        <p>{arrivalDateFormatted}</p>
                    </div>
                </div>

                <Table responsive="md text-center">
                    <tbody>
                        <tr>
                            <td>Empresa</td>
                            <td>Empresa</td>
                        </tr>
                        <tr>
                            <td>Servicio</td>
                            <td>SEMI-CAMA</td>
                        </tr>
                        <tr>
                            <td>Tiempo de viaje </td>
                            <td>{travelTime}hs</td>
                        </tr>
                        <tr>
                            <td>Boleto</td>
                            <td>E-Ticket</td>
                        </tr>
                        <tr>
                            <td>Pasajero</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>SubTotal</td>
                            <td>$ {ticket.precio}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </Container>
    )
}

export default TicketDetail