import React, { useState } from 'react'
import styles from './styles.module.css'
import { MdOutlineEventSeat } from 'react-icons/md'

const BotoneraAseintos = () => {
    const [seats, setSeats] = useState(44);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const isSeatSelected = (seat) => {
        return selectedSeats.includes(seat);
    };

    const seatList = Array.from(Array(seats).keys());
    const half = Math.ceil(seatList.length / 2);
    const firstHalf = seatList.slice(0, half);
    const secondHalf = seatList.slice(half);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.seatsContainer}>
                    <div className={styles.rows}>
                        {
                            firstHalf.map(seat => (
                                <div key={seat} className={`${styles.columns} ${isSeatSelected(seat) ? styles.selectedSeat : ''}`} onClick={() => handleSeatClick(seat)}>
                                    <MdOutlineEventSeat className={styles.icon} />
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.rows}>
                        {
                            secondHalf.map(seat => (
                                <div key={seat} className={`${styles.columns} ${isSeatSelected(seat) ? styles.selectedSeat : ''}`} onClick={() => handleSeatClick(seat)}>
                                    <MdOutlineEventSeat className={styles.icon} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BotoneraAseintos;