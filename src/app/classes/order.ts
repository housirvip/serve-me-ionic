import { OrderStatus } from "./order-status";
import { VendorCategory } from "./vendor-category";
import { User } from "./user";
import { Vendor } from "./vendor";
import { Address } from "./address";
import { Bid } from "./bid";
import { WorkType } from "./work-type";

export class Order {
  id: number;
  user: User;
  vendor: Vendor;
  title: string;
  description: string;
  price: number;
  category: VendorCategory;
  status: OrderStatus;
  time: Date;
  createTime: Date;
  updateTime: Date;
  imgUrl: string;
  address: Address;
  bids: Bid[];

  // Javier
  time_str: string;
  best_bid: number;

  type: WorkType;
  requestor: string;
  serverProvider: string;
  orderID: number;
  location: string;
}
