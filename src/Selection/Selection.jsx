import React from "react";
import styles from './Selection.module.css';

export default function Selection(){
    return(
        <div className={styles.container}>
            <div>
                <h1>INSERTAR NAV, SACAR FONDO FEO, SACAR CAJA DE ELIMINAR, AGREGAR BOTON DE BACK A TODO Y MODIFICAR COLORES Y TAMAÑO DE LAS OTRAS 2 CAJAS</h1>
            </div>

            <div className={styles.div1}>
                <h2 className={styles.h2}>CREAR</h2>
                <p class="d-inline-flex gap-1">
                    <a href="create_company" class="btn btn-success" role="button" data-bs-toggle="button">EMPRESA</a>
                    <a href="/create_bus" class="btn btn-success" role="button" data-bs-toggle="button">COLECTIVO</a>
                    <a href="/create_route" class="btn btn-success" role="button" data-bs-toggle="button">RUTA</a>
                </p>
            </div>

            <div className={styles.div2}>
                <h2 className={styles.h2}>EDITAR O ELIMINAR</h2>
                <p class="d-inline-flex gap-1">
                    <a href="/modify_company" class="btn btn-warning" role="button" data-bs-toggle="button">EMPRESA</a>
                    <a href="/modify_bus" class="btn btn-warning" role="button" data-bs-toggle="button">COLECTIVO</a>
                    <a href="/modify_route" class="btn btn-warning" role="button" data-bs-toggle="button">RUTA</a>
                </p>
            </div>

            <div className={styles.div3}>
                <h2 className={styles.h2}>ELIMINAR</h2>
                <p class="d-inline-flex gap-1">
                    <a href="/" class="btn btn-danger" role="button" data-bs-toggle="button">EMPRESA</a>
                    <a href="/" class="btn btn-danger" role="button" data-bs-toggle="button">COLECTIVO</a>
                    <a href="/" class="btn btn-danger" role="button" data-bs-toggle="button">RUTA</a>
                </p>
            </div>

            <footer>
                <div>
                     <hr />
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quisquam culpa non quae consequatur rem laboriosam repudiandae, 
                        magni numquam praesentium. Sequi officia tempore incidunt quasi dolorem, distinctio magnam fugiat ratione? Lorem ipsum dolor sit amet 
                        consectetur 
                        adipisicing elit. Dignissimos deleniti sunt culpa amet dolores enim, aspernatur consequatur nesciunt? 
                        Quidem itaque delectus soluta ipsum molestias temporibus necessitatibus odio iste placeat iusto.</h6>
                </div>
            </footer>
        </div>
    )
}