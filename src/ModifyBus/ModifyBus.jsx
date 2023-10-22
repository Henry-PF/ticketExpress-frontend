import React from "react";
import styles from "../ModifyBus/ModifyBus.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModifyBus(){
    return(
        <div className={styles.div}>
            <div>
                <h1>AGREGAR PAGINADO PORQUE VAN A SER MUCHOS DATOS, BOTON DE VOLVER Y FUNCIONALIDAD A LOS BOTONES CUANDO SE SUME EL REDUX</h1>
            </div>

            <table className={styles.table}>
                <tr>
                    <th className={styles.th}>Modelo</th>
                    <th className={styles.th}>Marca</th>
                    <th className={styles.th}>Servicio</th>
                    <th className={styles.th}>Empresa</th>
                    <th className={styles.th}>Capacidad</th>
                    <th className={styles.th}>Ruta</th>
                    <th className={styles.th}>Numero de Patente</th>
                    <th className={styles.th}>Editar</th>
                    <th className={styles.th}>Eliminar</th>
                </tr>
    
                <tr>
                    <td className={styles.td}>Modelo 1</td>
                    <td className={styles.td}>Marca 1</td>
                    <td className={styles.td}>Servicio 1</td>
                    <td className={styles.td}>Empresa 1</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 1</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Modelo 2</td>
                    <td className={styles.td}>Marca 2</td>
                    <td className={styles.td}>Servicio 2</td>
                    <td className={styles.td}>Empresa 2</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 2</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Modelo 3</td>
                    <td className={styles.td}>Marca 3</td>
                    <td className={styles.td}>Servicio 3</td>
                    <td className={styles.td}>Empresa 3</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 3</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Modelo 4</td>
                    <td className={styles.td}>Marca 4</td>
                    <td className={styles.td}>Servicio 4</td>
                    <td className={styles.td}>Empresa 4</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 4</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Modelo 5</td>
                    <td className={styles.td}>Marca 5</td>
                    <td className={styles.td}>Servicio 5</td>
                    <td className={styles.td}>Empresa 5</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 5</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Modelo 6</td>
                    <td className={styles.td}>Marca 6</td>
                    <td className={styles.td}>Servicio 6</td>
                    <td className={styles.td}>Empresa 6</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>Ruta 6</td>
                    <td className={styles.td}>ABC 123</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>
            </table>
        </div>
    )
}