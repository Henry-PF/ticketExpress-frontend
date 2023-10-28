import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineEventSeat } from 'react-icons/md';
import { Tabs, Tab } from 'react-bootstrap'
import styles from './styles.module.css';

const BotoneraAseintos = () => {

    const [seats, setSeats] = useState(44);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupiedSeats, setOccupiedSeats] = useState([]);
    const [seatForms, setSeatForms] = useState({});

    const asientosOcupados = async () => {
        try {
            const { data } = await axios.get('http://localhost:3001/asientos');
            const occupiedSeatNumbers = data.data?.map(asiento => parseInt(asiento.nombre, 10)); // Obtén los números de asientos ocupados
            setOccupiedSeats(occupiedSeatNumbers);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSeatClick = (seat) => {
        if (isSeatOccupied(seat)) {
            return;
        }

        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
            setSeatForms((prevSeatForms) => {
                const updatedForms = { ...prevSeatForms };
                delete updatedForms[seat];
                return updatedForms;
            });
        } else {
            setSelectedSeats([...selectedSeats, seat]);
            setSeatForms((prevSeatForms) => {
                return { ...prevSeatForms, [seat]: { numero: seat } };
            });
        }
    };

    const isSeatSelected = (seat) => {
        return selectedSeats.includes(seat);
    };

    const isSeatOccupied = (seat) => {
        return occupiedSeats.includes(seat);
    };

    const handleSeatReservation = async () => {
        try {
            const seatsToReserve = selectedSeats.filter(seat => !isSeatOccupied(seat));

            if (seatsToReserve.length === 0) {
                return;
            }

            for (const seat of seatsToReserve) {
                await axios.post('http://localhost:3001/asientos', {
                    nombre: seat.toString(),
                    id_buses: 1,
                });
            }
            alert('Asientos reservados con éxito');
        } catch (error) {
            console.error('Error al reservar asientos:', error);
        }
    };

    const seatList = Array.from(Array(seats).keys());
    const half = Math.ceil(seatList.length / 2);
    const firstHalf = seatList.slice(0, half);
    const secondHalf = seatList.slice(half);

    useEffect(() => {
        asientosOcupados();
        isSeatSelected();

        const interval = setInterval(() => {
            asientosOcupados();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleFormChange = (seat, fieldName, value) => {
        const updatedForm = { ...seatForms[seat], [fieldName]: value };
        setSeatForms({ ...seatForms, [seat]: updatedForm });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.seatsContainer}>
                    <div className={styles.rows}>
                        {firstHalf.map(seatIndex => (
                            <div
                                key={seatIndex}
                                className={`${styles.columns} ${isSeatSelected(seatIndex) ? styles.selectedSeat : ''} ${isSeatOccupied(seatIndex) ? styles.occupiedSeat : ''}`}
                                onClick={() => handleSeatClick(seatIndex)}
                                disabled={isSeatOccupied(seatIndex)}
                            >
                                <MdOutlineEventSeat className={styles.icon} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.rows}>
                        {secondHalf.map(seatIndex => (
                            <button
                                key={seatIndex}
                                className={`${styles.columns} ${isSeatSelected(seatIndex) ? styles.selectedSeat : ''} ${isSeatOccupied(seatIndex) ? styles.occupiedSeat : ''}`}
                                onClick={() => handleSeatClick(seatIndex)}
                                disabled={isSeatOccupied(seatIndex)}
                            >
                                <MdOutlineEventSeat className={styles.icon} />
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <Tabs
                        defaultActiveKey={seatForms[0]}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        {
                            selectedSeats.map(seat => (
                                <Tab key={seat} eventKey={seat} title={`Asiento ${seat}`}>
                                    <div className={styles.tabContainer}>
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Nombre"
                                            value={seatForms[seat]?.nombre || ''}
                                            onChange={(e) => handleFormChange(seat, 'nombre', e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Apellido"
                                            value={seatForms[seat]?.apellido || ''}
                                            onChange={(e) => handleFormChange(seat, 'apellido', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.tabContainer}>
                                        <input
                                            className={styles.input}
                                            type="phone"
                                            placeholder="Teléfono"
                                            value={seatForms[seat]?.telefono || ''}
                                            onChange={(e) => handleFormChange(seat, 'telefono', e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="DNI"
                                            value={seatForms[seat]?.dni || ''}
                                            onChange={(e) => handleFormChange(seat, 'dni', e.target.value)}
                                        />
                                    </div>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        placeholder="Correo"
                                        value={seatForms[seat]?.apellido || ''}
                                        onChange={(e) => handleFormChange(seat, 'correo', e.target.value)}
                                    />
                                </Tab>
                            ))
                        }
                    </Tabs>
                    <button className={styles.btn_seat} onClick={handleSeatReservation}>Guardar Asiento</button>
                </div>
            </div>

        </>
    );
};

export default BotoneraAseintos;