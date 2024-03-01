import { Event } from "./events";
import { Event2 } from 'src/app/_models/events';

export interface CartItem {
    product: Event2,
    amount: number,
}