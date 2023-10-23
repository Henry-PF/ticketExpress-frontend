import React from "react";
import styles from "../ModifyCompany/ModifyCompany.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModifyCompany(){
    return(
        <div className={styles.div}>
            <div>
                <h1>AGREGAR PAGINADO PORQUE VAN A SER MUCHOS DATOS, BOTON DE VOLVER Y FUNCIONALIDAD A LOS BOTONES CUANDO SE SUME EL REDUX</h1>
            </div>

            <table className={styles.table}>
                <tr>
                    <th className={styles.th}>Nombre</th>
                    <th className={styles.th}>Direccion</th>
                    <th className={styles.th}>Correo Electronico</th>
                    <th className={styles.th}>Telefono</th>
                    <th className={styles.th}>CUIT</th>
                    <th className={styles.th}>Editar</th>
                    <th className={styles.th}>Eliminar</th>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 1</td>
                    <td className={styles.td}>Direccion 1</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>
    
                <tr>
                    <td className={styles.td}>Empresa 2</td>
                    <td className={styles.td}>Direccion 2</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 3</td>
                    <td className={styles.td}>Direccion 3</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 4</td>
                    <td className={styles.td}>Direccion 4</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 5</td>
                    <td className={styles.td}>Direccion 5</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 6</td>
                    <td className={styles.td}>Direccion 6</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>

                <tr>
                    <td className={styles.td}>Empresa 7</td>
                    <td className={styles.td}>Direccion 7</td>
                    <td className={styles.td}>soyunmail@gmail.com</td>
                    <td className={styles.td}>44444444</td>
                    <td className={styles.td}>1111111111</td>
                    <td className={styles.td}><FontAwesomeIcon icon={faPencil} style={{color: "#dedb2b",}} /></td>
                    <td className={styles.td}><FontAwesomeIcon icon={faTrash} style={{color: "#dd3636",}} /></td>
                </tr>
            </table>
        </div>
    )
}