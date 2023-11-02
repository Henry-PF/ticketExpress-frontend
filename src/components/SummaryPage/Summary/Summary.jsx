import React from 'react';
import NavbarLanding from '../../LandingPage/Navbar/NavbarLanding';
import PassengerDetails from '../PassengerDetails/PassengerDetails';
import TicketDetail from '../TicketDetail/TicketDetail';
import styles from "./Summary.module.css";
import BotoneraAseintos from '../../LandingPage/BotoneraAsientos/BotoneraAseintos';

const Summary = () => {
    return (
        <main>
            <NavbarLanding />

            <BotoneraAseintos />
        </main>
    )
}

export default Summary