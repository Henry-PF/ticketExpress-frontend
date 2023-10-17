import { SEARCH_RESULTS } from './action-types'

const initialState = {
    trips: [
        {
            id: 0,
            origin: 'Buenos Aires',
            destination: 'Cordoba',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '08:00',
            arrivalTime: '14:00',
        },
        {
            id: 1,
            origin: 'Buenos Aires',
            destination: 'Cordoba',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '18:00',
            arrivalTime: '02:00',
        },
        {
            id: 27,
            origin: 'Buenos Aires',
            destination: 'Cordoba',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '20:00',
            arrivalTime: '03:45',
        },
        {
            id: 26,
            origin: 'Buenos Aires',
            destination: 'Cordoba',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '21:30',
            arrivalTime: '04:50',
        },

        {
            id: 2,
            origin: 'Buenos Aires',
            destination: 'Cordoba',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '23:59',
            arrivalTime: '06:00',
        },
        {
            id: 3,
            origin: 'Cordoba',
            destination: 'Buenos Aires',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '23:59',
            arrivalTime: '06:00',
        },
        {
            id: 4,
            origin: 'Cordoba',
            destination: 'Buenos Aires',
            departureDate: '2023-10-17',
            returnDate: '2023-10-18',
            departureTime: '23:59',
            arrivalTime: '06:00',
        },
        {
            id: 5,
            origin: "Buenos Aires",
            destination: "Mendoza",
            departureDate: "2023-10-23",
            returnDate: "2023-10-24",
            departureTime: "09:30",
            arrivalTime: "12:15"
        },
        {
            id: 6,
            origin: "Cordoba",
            destination: "Rosario",
            departureDate: "2023-10-25",
            returnDate: "2023-10-26",
            departureTime: "08:15",
            arrivalTime: "15:45"
        },
        {
            id: 25,
            origin: "Cordoba",
            destination: "Rosario",
            departureDate: "2023-10-25",
            returnDate: "2023-10-26",
            departureTime: "14:15",
            arrivalTime: "20:45"
        },
        {
            id: 7,
            origin: "Salta",
            destination: "Buenos Aires",
            departureDate: "2023-10-27",
            returnDate: "2023-10-28",
            departureTime: "11:00",
            arrivalTime: "14:30"
        },
        {
            id: 8,
            origin: "Mendoza",
            destination: "Cordoba",
            departureDate: "2023-10-29",
            returnDate: "2023-10-30",
            departureTime: "10: 45",
            arrivalTime: "12: 30"
        },
        {
            id: 9,
            origin: "Rosario",
            destination: "Salta",
            departureDate: "2023-10-31",
            returnDate: "2023-10-01",
            departureTime: "15:30",
            arrivalTime: "17:45"
        },
        {
            id: 10,
            origin: "Buenos Aires",
            destination: "Cordoba",
            departureDate: "2023-11-02",
            returnDate: "2023-11-03",
            departureTime: "13:00",
            arrivalTime: "15: 30"
        },
        {
            i: 11,
            origin: "Mendoza",
            destination: "Salta",
            departureDate: "2023-11-04",
            returnDate: "2023-11-05",
            departureTime: "10:15",
            arrivalTime: "13:00"
        },
        {
            id: 12,
            origin: "Rosario",
            destination: "Cordoba",
            departureDate: "2023-11-06",
            returnDate: "2023-11-07",
            departureTime: "08:30",
            arrivalTime: "09:45"
        },
        {
            id: 13,
            origin: "Salta",
            destination: "Mendoza",
            departureDate: "2023-11-08",
            returnDate: "2023-11-09",
            departureTime: "12:45",
            arrivalTime: "15:15"
        },
        {
            id: 14,
            origin: "Cordoba",
            destination: "Buenos Aires",
            departureDate: "2023-11-10",
            returnDate: "2023-11-11",
            departureTime: "16:00",
            arrivalTime: "19:30"
        },
        {
            id: 15,
            origin: "Buenos Aires",
            destination: "Salta",
            departureDate: "2023-11-12",
            returnDate: "2023-11-13",
            departureTime: "11:45",
            arrivalTime: "14:15"
        },
        {
            id: 16,
            origin: "Mendoza",
            destination: "Buenos Aires",
            departureDate: "2023-11-14",
            returnDate: "2023-11-15",
            departureTime: "09:30",
            rrivalTime: "12:00"
        },
        {
            id: 17,
            origin: "Cordoba",
            destination: "Salta",
            departureDate: "2023-11-16",
            returnDate: "2023-11-17",
            departureTime: "14:30",
            arrivalTime: "16:45"
        },
        {
            id: 18,
            origin: "Salta",
            destination: "Rosario",
            departureDate: "2023-11-18",
            returnDate: "2023-11-19",
            departureTime: "13:15",
            arrivalTime: "15:00"
        },
        {
            id: 19,
            origin: "Cordoba",
            destination: "Salta",
            departureDate: "2023-10-18",
            returnDate: "2023-11-17",
            departureTime: "14:30",
            arrivalTime: "16:45"
        },
    ],
    data: [],

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS:
            const { origin, destination, departureDate } = action.payload;
            const filter = state.trips.filter((trip) => {
                return trip.origin.toLowerCase() === origin.toLowerCase() && trip.destination.toLowerCase() === destination.toLowerCase() && trip.departureDate.toLowerCase() === departureDate.toLowerCase();
            });

            return {
                ...state,
                data: filter,
            };


        default:
            return state;
    }
};
console.log(initialState.data);

export default rootReducer;