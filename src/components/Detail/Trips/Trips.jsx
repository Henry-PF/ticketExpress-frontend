import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavbarLanding from "../../LandingPage/Navbar/NavbarLanding";
import SearchBar from "../../LandingPage/SearchBar/SearchBar";
import { useLocation, useParams } from "react-router";


export default function Trips() {
    // const dispatch = useDispatch();
    const results = useSelector(state => state.results);
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const origen = query.get('origen');
    const destino = query.get('destino');
    const fecha_salida = query.get('fecha_salida');

    return (
        <div>
            <NavbarLanding />
            <SearchBar origen={origen} destino={destino} fecha_salida={new Date(fecha_salida)} />

            <div className={styles.home}>
                <div>
                    <Filters />
                </div>
                <div className={styles.cards}>
                    {
                        results.data?.map((result, index) => (
                            <div key={index} className={styles.card}>
                                <Card
                                    id={result.id}
                                    origin={result.origen}
                                    destination={result.destino}
                                    fecha_salida={result.fecha_salida}
                                    hora_salida={result.hora_salida}
                                    hora_llegada={result.hora_llegada}
                                    precio={result.precio}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}