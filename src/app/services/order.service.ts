import { Injectable } from "@angular/core";
import { WorkType } from "../classes/work-type";
import { OrderStatus } from "../classes/order-status";
import { HttpClient } from "@angular/common/http";
import { Order } from "../classes/order";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  getOrders(filter: OrderStatus): Order[] {
    switch (filter) {
      case OrderStatus.waiting:
        return [
          {
            title: "Looking for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            requestor: "John",
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/cleaner.png",
            orderID: 0,
            description:
              "My house is super dirty and I am in need of a cleaner.",
            location: "Rowlett, TX"
          },
          {
            title: "Really need someone help me",
            price: "20.99$",
            type: WorkType.Repairing,
            status: OrderStatus.waiting,
            requestor: "Rose",
            serverProvider: "Jack",
            time: "02/01/2020",
            imgUrl: "../../assets/order/repair.png",
            orderID: 1,
            description:
              "I messed up my laptop and need someone to fix it ASAP.",
            location: "Dallas, TX"
          }
        ];
      case OrderStatus.biding:
        return [
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            requestor: "Jay",
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/repair.png",
            orderID: 2,
            description:
              "My room is house is a mess. I have gests tonight so I'm looking for cleaning services. House has 3 rooms and 2 bathrooms",
            location: "Rockwall, TX"
          }
        ];
      case OrderStatus.progress:
        return [
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/weedcleaner.png",
            requestor: "Sarah",
            orderID: 3,
            description: "lorem ipsum order 3",
            location: "Rowlett, TX"
          },
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/weedcleaner.png",
            requestor: "Jose",
            orderID: 4,
            description: "lorem ipsum order 4",
            location: "Rowlett, TX"
          }
        ];
      case OrderStatus.completed:
        return [
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/dogwalker.png",
            requestor: "Jasmine",
            orderID: 5,
            description: "lorem ipsum order 5",
            location: "Rowlett, TX"
          },
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/dogwalker.png",
            requestor: "Isabelle",
            orderID: 6,
            description: "lorem ipsum order 6",
            location: "Rowlett, TX"
          },
          {
            title: "Look for cleaner",
            price: "12.99$",
            type: WorkType.Cleaner,
            status: OrderStatus.waiting,
            serverProvider: "Bill",
            time: "01/01/2020",
            imgUrl: "../../assets/order/dogwalker.png",
            requestor: "Max",
            orderID: 7,
            description: "lorem ipsum order 7",
            location: "Rowlett, TX"
          }
        ];
      default:
        return [];
    }
  }
}
