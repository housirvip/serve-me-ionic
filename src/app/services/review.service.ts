import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Review} from '../classes/review';
import {ReviewRequest} from '../classes/spec/review-request';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    get reviews(): Review[] {
        return this._reviews;
    }

    get currentReview(): Review {
        return this._currentReview;
    }

    // tslint:disable-next-line:variable-name
    private _reviews: Review[];
    // tslint:disable-next-line:variable-name
    private _currentReview: Review;

    constructor(private http: HttpClient,
                private loadingService: LoadingService) {
    }

    getList(reviewRequest: ReviewRequest) {
        this.loadingService.present().then(r => {
        });
        this.http.get<Review[]>('reviews', {
            params: reviewRequest.toParam()
        }).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._reviews = res;
            });
    }

    delete(id: number) {
        this.loadingService.present().then(r => {
        });
        this.http.delete<Review>('reviews/' + id, {}).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
            });
    }

    create(review: Review) {
        this.loadingService.present().then(r => {
        });
        this.http.post<Review>('reviews', review).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._currentReview = res;
            });
    }

    update(review: Review) {
        this.loadingService.present().then(r => {
        });
        this.http.put<Review>('reviews/' + review.id, review).subscribe(
            res => {
                this.loadingService.dismiss().then(r => {
                });
                this._currentReview = res;
            });
    }
}
