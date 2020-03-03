import {WorkType} from './work-type';
import {OrderStatus} from './order-status';

export class Jorder {
    title: string;
    price: string;
    type: WorkType;
    status: OrderStatus;
    requestor: string; // who posted the order
    serverProvider: string; // who is providing the service
    time: string;
    imgUrl: string;
    orderID: number;
    description: string;
    location: string;
    // maybe should add a list of bidders (ie bidders uid)
    // maybe should add selected provider (uid of the provider who will fullfill the request)
    // maybe should add priceRangeMin and priceRangeMax, which are set by customer
    //  and have price be the agreed price
}
