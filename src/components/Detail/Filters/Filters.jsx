import React, { Fragment } from "react";
import ReactSlider from "react-slider";
import { useState } from "react";
import styles from "./Filters.module.css";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

//POR AHORA SOLO VISUAL
//AGREGAR LUEGO FUNCIONES DE FILTRADO QUE VENDRAN LUEGO DESDE EL BACK
//AGREGAR MAS CSS

export default function Filters() {
    const [valueHour, setValueHour] = useState([]);
    const [valuePrice, setValuePrice] = useState([]);

    return (
        <Fragment>
            <div className={styles.div}>
                <h4 className={styles.h4}>Filtros de Busqueda</h4>
                <Accordion className={styles.accordionContainer} defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item className={styles.accordion} eventKey="0">
                        <Accordion.Header>Empresas</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    id="todas"
                                    label="Todas"
                                    defaultChecked
                                />
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    label="Empresa 1"
                                    id="Empresa 1"
                                />
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    label="Empresa 2"
                                    id="custom-switch"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className={styles.accordionContainer} defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item className={styles.accordion} eventKey="0">
                        <Accordion.Header>Categoria</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    id="custom-switch"
                                    label="Todas"
                                    defaultChecked
                                />
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    label="Semi-cama"
                                    id="custom-switch"
                                />
                                <Form.Check
                                    className={styles.check}
                                    type="switch"
                                    label="Cama"
                                    id="custom-switch"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="form-check">
                    <label className={styles.label}>Horarios</label>
                    <ReactSlider
                        className={styles.horizontalSlider}
                        thumbClassName={styles.exampleThumb}
                        trackClassName={styles.exampleTrack}
                        defaultValue={[0, 24]}
                        min={0}
                        max={24}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={1}
                        onChange={(valueHour, index) => setValueHour(valueHour)}
                    />

                    <hr />

                    Start: {valueHour[0]} <br />
                    End: {valueHour[1]}
                </div>

                <br />

                <div className="form-check">
                    <label className={styles.label}>Precio</label>
                    <ReactSlider
                        className={styles.horizontalSlider}
                        thumbClassName={styles.exampleThumb}
                        trackClassName={styles.exampleTrack}
                        defaultValue={[3000, 25000]}
                        min={3000}
                        max={25000}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={1}
                        onChange={(valuePrice, index) => setValuePrice(valuePrice)}
                    />

                    <hr />

                    Start: {valuePrice[0]} <br />
                    End: {valuePrice[1]}
                </div>
            </div>
        </Fragment>
    )
}