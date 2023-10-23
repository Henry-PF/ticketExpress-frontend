import React from "react";
import { Container, Card, Button, ButtonGroup } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import styles from "./TicketDetail.module.css";

const TicketDetail = () => {
  const { id } = useParams();

  const results = useSelector((state) => state.data);

  const ticket = results?.find((result) => result.id == id);

  console.log(ticket);

  const departureTime = new Date(`2000-01-01T${ticket.departureTime}`);
  const arrivalTime = new Date(`2000-01-01T${ticket.arrivalTime}`);

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
  const travelTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  // Configura el idioma de moment
  moment.locale("es");

  // Convierte la fecha de salida y hora de salida al formato deseado
  const departureDateFormatted = moment(ticket.departureDate).format(
    "dddd DD/MM"
  );
  const departureTimeFormatted = moment(ticket.departureTime, "HH:mm").format(
    "HH:mm"
  );

  // Calcula la fecha y hora de llegada sumando el tiempo de viaje
  const departureDateTime = moment(
    ticket.departureDate + " " + ticket.departureTime,
    "YYYY-MM-DD HH:mm"
  );
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
          <Button className={styles.buttons}>Ida</Button>
          <Button className={styles.buttons}>Vuelta</Button>
        </ButtonGroup>
        <div className={styles.trip}>
          <p className={styles.parrafo}>
            De <span>{ticket.origin}</span>
          </p>
          <p className={styles.parrafo}>
            A <span>{ticket.destination}</span>
          </p>
        </div>
        <div className={styles.divHorarios}>
          <div className={styles.subDivHorarios}>
            <p>Horario de Salida</p>
            <h5> {ticket.departureTime} hs</h5>
            <p>{departureDateFormatted}</p>
          </div>
          <div className={styles.subDivHorarios}>
            <p>Horario de Llegada</p>
            <h5> {ticket.arrivalTime} hs</h5>
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
              <td>$10000</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default TicketDetail;
