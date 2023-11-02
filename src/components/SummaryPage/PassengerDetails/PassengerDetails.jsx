import {
  Container,
  Card,
  CardTitle,
  InputGroup,
  FormLabel,
  FormControl,
  FormGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import styles from "./PassengerDetails.module.css";
import img from "../../../assets/seat.jpg";
import axios from "axios";

const PassengerDetails = () => {
  // paypal.Buttons({
  //   fundingSource,
  //   style: {
  //     layout: 'vertical',
  //     color: 'blue',
  //     shape: 'pill',
  //     label: 'paypal'
  //   },
  //   createOrder: function (data, actions) {
  //     return actions.order.create({
  //       purchase_units: [{
  //         amount: {
  //           value: total_cancelar
  //         }
  //       }]
  //     });
  //   },
  //   onApprove: function (data, actions) {
  //     return actions.order.capture().then(function (details) {
  //       var referencia = details.id;
  //       var status = details.status;
  //       var montousd = details.purchase_units[0].amount.value;
  //       var lang = "es";
  //       notificacionPago(referencia, status, montousd, lang, "pagopaypal")
  //     });
  //   },
  //   onError: function (data, actions) {
  //     Swal.fire({
  //       width: '62em',
  //       title: '',
  //       html: '<span class="azul-iw f-500 tx-22">Ocurrió un error. Por favor, contáctenos.</span>',
  //       icon: 'error',
  //       dangerMode: true,
  //       closeOnClickOutside: false,
  //       allowOutsideClick: false,
  //       allowEscapeKey: false,
  //       allowEnterKey: false,
  //       buttons: {
  //         cancel: {
  //           text: 'Cerrar',
  //           value: null,
  //           visible: true,
  //         }
  //       }
  //     });
  //   }
  // }).render('#paypal-button-container');

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3001/payment/create-order", {})
    const data = response.data
    const paymentURL = data.links[1]?.href; // URL de pago de PayPal
    window.open(paymentURL, "_blank");
  }

  return (

    <ButtonGroup className={styles.buttonGroup}>
      <Button className={styles.buttonCompra} onClick={handleClick}>
        Comprar
      </Button>
    </ButtonGroup>
  );
};

export default PassengerDetails;
