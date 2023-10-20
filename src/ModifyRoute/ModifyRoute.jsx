import React from "react";
import styles from "../ModifyRoute/ModifyRoute.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModifyRoute(){
    return(
        <div className={styles.div}>
            <div>
                <h1>ACA VA EL NAV</h1>
            </div>

            <table className={styles.table}>
                <tr>
                    <th className={styles.th}>Ciudad de Origen</th>
                    <th className={styles.th}>Ciudad de Destino</th>
                    <th className={styles.th}>Hora de Salida</th>
                    <th className={styles.th}>Hora de Llegada</th>
                    <th className={styles.th}>Empresa</th>
                    <th className={styles.th}>Valor del Ticket</th>
                    <th className={styles.th}>Editar</th>
                    <th className={styles.th}>Eliminar</th>
                </tr>
    
                <tr>
                    <td className={styles.td}>Origen 1</td>
                    <td className={styles.td}>Destino 1</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 1</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Origen 2</td>
                    <td className={styles.td}>Destino 2</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 2</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Origen 3</td>
                    <td className={styles.td}>Destino 3</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 3</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Origen 4</td>
                    <td className={styles.td}>Destino 4</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 4</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Origen 5</td>
                    <td className={styles.td}>Destino 5</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 5</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Origen 6</td>
                    <td className={styles.td}>Destino 6</td>
                    <td className={styles.td}>00:00</td>
                    <td className={styles.td}>12:00</td>
                    <td className={styles.td}>Empresa 6</td>
                    <td className={styles.td}>$ 10.000</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

            </table>
        </div>
    )
}