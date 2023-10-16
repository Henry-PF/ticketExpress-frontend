import React from "react";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import styles from "./Home.module.css";
//import navbar

export default function Home() { 
    return (
        <div>
            NAV
            {/*NAVBAR: Usa el mismo nav que la pagina principal*/}

            <div className={styles.home}>
                <div>
                    <Filters/>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Card />
                    </div>

                    <div className={styles.card}>
                        <Card />
                    </div>

                    <div className={styles.card}>
                        <Card />
                    </div>

                    <div className={styles.card}>
                        <Card />
                    </div>
                </div>
            </div>

        </div>
    )
}