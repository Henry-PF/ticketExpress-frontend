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

const PassengerDetails = () => {
  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/payment/create-order", {
      method: "POST",
    });
    console.log(response);
    const data = await response.json();

    window.location.href = data.links[1]?.href;
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
