import { WorkType } from "./work-type";
import { OrderStatus } from "./order-status";

export class Order {
  title: string;
  price: string;
  type: WorkType;
  status: OrderStatus;
  requestor: string; //who posted the order
  serverProvider: string; //who is providing the service
  time: string;
  imgUrl: string;
  orderID: number;
  description: string;
  location: string;
}
