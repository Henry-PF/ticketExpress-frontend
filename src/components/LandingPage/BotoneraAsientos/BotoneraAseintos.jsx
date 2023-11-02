import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineEventSeat } from 'react-icons/md';
import { Tabs, Tab } from 'react-bootstrap'
import PassengerDetails from '../../SummaryPage/PassengerDetails/PassengerDetails';
import styles from './styles.module.css';
import TicketDetail from '../../SummaryPage/TicketDetail/TicketDetail';
import { useParams } from 'react-router';

const BotoneraAseintos = () => {

    const { origen, destino, fecha_salida, hora_salida, hora_llegada, precio } = useParams();

    const [seats, setSeats] = useState(44);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupiedSeats, setOccupiedSeats] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [seatData, setSeatData] = useState({});
    const [passagerData, setPassagerData] = useState([])
    const seatList = Array.from(Array(seats).keys());
    const half = Math.ceil(seatList.length / 2);

    const numColumns = 2;
    const numRows = half;

    const seatMatrix = [];

    for (let column = 0; column < numColumns; column++) {
        const columnSeats = [];
        for (let row = 0; row < numRows; row++) {
            columnSeats.push(`${String.fromCharCode(65 + column)}${row}`);
        }
        seatMatrix.push(columnSeats);
    }

    const handleSeatClick = (seat) => {
        if (isSeatOccupied(seat)) {
            return;
        }

        const updatedSeatData = { ...seatData };
        if (selectedSeats.includes(seat)) {
            delete updatedSeatData[seat];
            setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
        } else {
            updatedSeatData[seat] = { nombre: '', apellido: '', telefono: '', dni: '', correo: '' };
            setSelectedSeats([...selectedSeats, seat]);
        }

        setSeatData(updatedSeatData);
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

            const passengerDetails = seatsToReserve.map(seat => {
                const formData = seatData[seat];
                return {
                    nombre: formData.nombre || '',
                    apellido: formData.apellido || '',
                    correo: formData.correo || '',
                    dni: formData.dni || '',
                    cuit: '',
                    direccion: '',
                    telefono: formData.telefono || '',
                    asiento: seat.toString(),
                };
            });

            const reservationData = {
                datosPasajeros: passengerDetails,
                id_ruta: 1,
                id_user: parseInt(localStorage.getItem('id')),
                monto: precio * selectedSeats.length,
                viajeIdayVuelta: false
            };
            console.log(reservationData);
            setPassagerData(reservationData);
            console.log('PASAJERO', passagerData);

            const response = await axios.post("https://api-54nh.onrender.com/payment/create-order", reservationData);
            console.log(response);
            const data = await response.data;
            console.log(data);
            const paymentURL = data.links[1]?.href;
            window.open(paymentURL, "_blank");

            alert('Asientos reservados con éxito');
        } catch (error) {
            console.error('Error al reservar asientos:', error);
        }
    };


    const handleFormChange = (seat, fieldName, value) => {
        const updatedSeatData = { ...seatData };
        if (!updatedSeatData[seat]) {
            updatedSeatData[seat] = {};
        }
        updatedSeatData[seat][fieldName] = value;
        setSeatData(updatedSeatData);

        const updatedPassagerData = { ...passagerData };
        if (!updatedPassagerData[seat]) {
            updatedPassagerData[seat] = {};
        }
        updatedPassagerData[seat][fieldName] = value;
        setPassagerData(updatedPassagerData);
    };

    useEffect(() => {
        isSeatSelected();

        // const interval = setInterval(() => {
        //     asientosOcupados();
        // }, 5000);

        // return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.seatsContainer}>
                    <div className={styles.rows}>
                        {seatMatrix[0].map(seatIndex => (
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
                        {seatMatrix[1].map(seatIndex => (
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
                        defaultActiveKey={activeTab}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        {
                            selectedSeats.map(seat => (
                                <Tab key={seat} eventKey={seat} title={`Asiento ${seat}`}>
                                    <div className={styles.tabContainer}>
                                        <input
                                            id={selectedSeats}
                                            className={styles.input}
                                            type="text"
                                            placeholder="Nombre"
                                            value={seatData[seat]?.nombre || ''}
                                            onChange={(e) => handleFormChange(seat, 'nombre', e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="Apellido"
                                            value={seatData[seat]?.apellido || ''}
                                            onChange={(e) => handleFormChange(seat, 'apellido', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.tabContainer}>
                                        <input
                                            className={styles.input}
                                            type="phone"
                                            placeholder="Teléfono"
                                            value={seatData[seat]?.telefono || ''}
                                            onChange={(e) => handleFormChange(seat, 'telefono', e.target.value)}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            placeholder="DNI"
                                            value={seatData[seat]?.dni || ''}
                                            onChange={(e) => handleFormChange(seat, 'dni', e.target.value)}
                                        />
                                    </div>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        placeholder="Correo"
                                        value={seatData[seat]?.correo || ''}
                                        onChange={(e) => handleFormChange(seat, 'correo', e.target.value)}
                                    />
                                </Tab>
                            ))
                        }
                    </Tabs>
                    <button className={styles.btn_seat} onClick={handleSeatReservation}>Guardar Asiento</button>
                    <PassengerDetails />
                </div>
                <TicketDetail
                    origen={origen}
                    destino={destino}
                    fecha_salida={fecha_salida}
                    hora_salida={hora_salida}
                    hora_llegada={hora_llegada}
                    precio={precio}
                    pasajeros={selectedSeats.length} />
            </div>

        </>
    );
};

export default BotoneraAseintos;