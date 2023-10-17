import React, { Fragment } from "react";
import ReactSlider from "react-slider";
import { useState } from "react";
import styles from "./Filters.module.css";

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
                <div className="form-check">
                    <label className={styles.label}>Empresas</label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="all" /> Todas </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="condor" /> Condor Estrella </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="aguila" /> El Aguila </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="flecha" /> Flecha Bus </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="plusmar" /> Plusmar </label> <br />
                </div>

                <br />

                <div className="form-check">
                    <label className={styles.label}>Categorias</label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="all" /> Todas </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="cama" /> Cama </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="semicama" /> Semicama </label> <br />
                    <label className="form-check-label"><input className="form-check-input" type="checkbox" value="suite" /> Suite </label> <br />
                </div>

                <br />

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