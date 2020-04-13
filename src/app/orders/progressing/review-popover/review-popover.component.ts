import { Component, OnInit } from "@angular/core";
import { NavParams, PopoverController } from "@ionic/angular";
import { Order } from "../../../classes/order";
import { Review } from "src/app/classes/review";
import { ToastService } from "../../../services/toast.service";
import { ReviewService } from "../../../services/review.service";

@Component({
  selector: "app-review-popover",
  templateUrl: "./review-popover.component.html",
  styleUrls: ["./review-popover.component.scss"],
})
export class ReviewPopoverComponent implements OnInit {
  selectedValue: number;

  star_one: string;
  star_two: string;
  star_three: string;
  star_four: string;
  star_five: string;

  title: string;
  description: string;
  order: Order;
  review: Review;

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private toastService: ToastService,
    private reviewService: ReviewService
  ) {
    this.order = this.navParams.get("order");
    this.review = new Review();
  }

  ngOnInit() {
    this.star_one = "star-outline";
    this.star_two = "star-outline";
    this.star_three = "star-outline";
    this.star_four = "star-outline";
    this.star_five = "star-outline";
  }

  onFormSubmit() {
    if (this.selectedValue) {
      //this.review.order = this.order; //setting this will cause a cyclic reference so review.order shouldn't be used
      this.review.createTime = new Date();
      this.review.updateTime = new Date();
      this.review.user = this.order.user;
      this.review.vendor = this.order.vendor;
      this.review.title = this.title;
      this.review.description = this.description;
      this.review.rate = this.selectedValue;
      console.log(this.review);

      this.dissmissPopover();
    } else {
      this.toastService.presentToast("Please select a rating", 1000);
    }
  }

  countStar(star) {
    this.selectedValue = star;
    switch (star) {
      case 1: {
        this.star_one = "star";
        this.star_two = "star-outline";
        this.star_three = "star-outline";
        this.star_four = "star-outline";
        this.star_five = "star-outline";
        break;
      }
      case 2: {
        this.star_one = "star";
        this.star_two = "star";
        this.star_three = "star-outline";
        this.star_four = "star-outline";
        this.star_five = "star-outline";
        break;
      }
      case 3: {
        this.star_one = "star";
        this.star_two = "star";
        this.star_three = "star";
        this.star_four = "star-outline";
        this.star_five = "star-outline";
        break;
      }
      case 4: {
        this.star_one = "star";
        this.star_two = "star";
        this.star_three = "star";
        this.star_four = "star";
        this.star_five = "star-outline";
        break;
      }
      case 5: {
        this.star_one = "star";
        this.star_two = "star";
        this.star_three = "star";
        this.star_four = "star";
        this.star_five = "star";
        break;
      }
      default: {
        this.star_one = "star-outline";
        this.star_two = "star-outline";
        this.star_three = "star-outline";
        this.star_four = "star-outline";
        this.star_five = "star-outline";
        break;
      }
    }

    console.log("Rating:", star);
  }

  async dissmissPopover() {
    await this.popoverController.dismiss(this.review); //passes the review back
  }
}
