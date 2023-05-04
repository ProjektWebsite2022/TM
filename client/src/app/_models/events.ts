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