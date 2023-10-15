import React from 'react';
import { Container, Card, CardTitle, InputGroup, FormLabel, FormControl, FormGroup, Button, ButtonGroup } from "react-bootstrap";
import styles from "./TicketDetail.module.css"

const TicketDetail = () => {
    return (
        <Container className={styles.main}>
            <Card className={styles.card}>
                <ButtonGroup className={styles.butonsGroup}>
                    <Button className={styles.buttons} >Ida</Button>
                    <Button className={styles.buttons} >Vuelta</Button>
                </ButtonGroup>
                <div>
                    <a className={styles.parrafo}>De: {"Destino"}</a>
                    <a className={styles.parrafo}>A: {"Destino"}</a>
                </div>
                <div className={styles.divHorarios}>
                    <div className={styles.subDivHorarios}>
                        <a>Llegada</a>
                        <h5> 00:00 hs</h5>
                        <a>Dia de Llegada</a>
                    </div>
                    <div className={styles.subDivHorarios}>
                        <a>Salida</a>
                        <h5> 00:00 hs</h5>
                        <a>Dia de salida</a>
                    </div>
                </div>
                <div className={styles.InputGroup}>
                    <hr />
                    <div className={styles.formGroup}>
                        <h6>Empresa</h6>
                        <h6>Empresa</h6>
                    </div>
                    <hr />
                    <div className={styles.formGroup}>
                        <a>Empresa</a>
                        <a>Empresa</a>
                    </div>
                    <hr />
                    <div className={styles.formGroup}>
                        <a>Empresa</a>
                        <a>Empresa</a>
                    </div>
                    <hr />
                    <div className={styles.formGroup}>
                        <a>Empresa</a>
                        <a>Empresa</a>
                    </div>
                    <hr />
                    <div className={styles.formGroup}>
                        <a>Empresa</a>
                        <a>Empresa</a>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default TicketDetail