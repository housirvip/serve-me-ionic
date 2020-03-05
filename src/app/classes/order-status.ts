export enum OrderStatus {
  Waiting = "Waiting", //should be removed - deprecated
  Biding = "Biding", //when created - all vendors can bid
  Progressing = "Progressing", //when customer selects a bid/vendor
  Completed = "Completed", //when vendor finished the order
  Pending = "Pending", //order finished, but pending payment
  Closed = "Closed", //canceled by the customer
  Finished = "Finished" //order is done. vendor finished and customer made payment
}
