export interface Event {
    id: number,
    type?: EventTypes
    name: string,
    price: number,
    description: string,
    start: Date,
    end: Date,
    location: Location
}

export interface Event2 {
    Eventnummer: number,
    Typ: string,
    Titel: string,
    Start: Date,
    Ende: Date,
    Beschreibung: string,
    Preis: number
};


export interface Location {
    name: string,
    capacity: number,
    latitude: number,
    longitude: number,
}


export enum EventTypes {
    Fußball = 'Fußball',
    Handball = 'Handball',
    Kampfsport = 'Kampfsport',
    Basketball = 'Basketball',
    Eishockey = 'Eishockey'

}