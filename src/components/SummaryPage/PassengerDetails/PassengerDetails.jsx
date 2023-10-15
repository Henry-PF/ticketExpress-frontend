import { Container, Card, CardTitle, InputGroup, FormLabel, FormControl, FormGroup, Button, ButtonGroup } from "react-bootstrap"
import styles from "./PassengerDetails.module.css"


const PassengerDetails = () => {
    return (
        <Container className={styles.main}>
            <Card className={styles.card}>
                <CardTitle className={styles.titleCard}>Datos del Pasajero</CardTitle>
                <InputGroup className={styles.InputGroup}>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Tipo de Indentificacion</FormLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Email</FormLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup className={styles.formGroup}>
                        <FormLabel>Numero de indentificacion</FormLabel>
                        <FormControl />
                    </FormGroup>
                </InputGroup>
            </Card>
            <ButtonGroup className={styles.buttonGroup}>
                  <Button className={styles.buttonCompra}>Comprar</Button>
            </ButtonGroup>
        </Container>

    )
}

export default PassengerDetails