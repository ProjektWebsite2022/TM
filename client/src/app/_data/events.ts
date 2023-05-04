import { Event, EventTypes } from "../_models/events";

export const events: Event[] = [
    {
        id: 1,
        type: EventTypes.Eishockey,
        name: 'Testevent',
        price: 24.99,
        description: 'Das ist die Beschreibung',
        start: new Date(),
        end: new Date(),
        location: {
            name: 'Mercedes Benz Arena',
            capacity: 60432,
            latitude: 23.3,
            longitude: 25.1
        }
    },
    {
        id: 2,
        type: EventTypes.Kampfsport,
        name: 'Testevent2',
        price: 35.99,
        description: 'Das ist die Beschreibung',
        start: new Date(),
        end: new Date(),
        location: {
            name: 'Mercedes Benz Arena',
            capacity: 60432,
            latitude: 23.3,
            longitude: 25.1
        }
    },
    {
        id: 3,
        type: EventTypes.Basketball,
        name: 'Testevent3',
        price: 74.99,
        description: 'Das ist die Beschreibung',
        start: new Date(),
        end: new Date(),
        location: {
            name: 'Mercedes Benz Arena',
            capacity: 60432,
            latitude: 23.3,
            longitude: 25.1
        }
    },
    {
        id: 4,
        type: EventTypes.Fußball,
        name: 'Testevent4',
        price: 89.99,
        description: 'Das ist die Beschreibung',
        start: new Date(),
        end: new Date(),
        location: {
            name: 'Mercedes Benz Arena',
            capacity: 60432,
            latitude: 23.3,
            longitude: 25.1
        }
    }
]