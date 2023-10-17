import React, { useState } from "react";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavbarLanding from "../../LandingPage/Navbar/NavbarLanding";
import SearchBar from "../../LandingPage/SearchBar/SearchBar";


export default function Trips() {

    // const dispatch = useDispatch();
    const results = useSelector(state => state.data);

    return (
        <div>
            <NavbarLanding />

            <div className={styles.home}>
                <div>
                    <Filters />
                </div>
                <div className={styles.cards}>
                    {
                        results?.map((result, index) => (
                            <div key={index} className={styles.card}>
                                <Card
                                    id={result.id}
                                    origin={result.origin}
                                    destination={result.destination}
                                    departureDate={result.departureDate}
                                    departureTime={result.departureTime}
                                    arrivalTime={result.arrivalTime}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}