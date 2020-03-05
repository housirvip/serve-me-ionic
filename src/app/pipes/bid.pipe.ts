import {Pipe, PipeTransform} from '@angular/core';
import {Bid} from '../classes/bid';

@Pipe({
    name: 'bid'
})
export class BidPipe implements PipeTransform {

    /*
    *  args[0] is max or min, args[1] is uid
    */
    transform(value: Bid[], ...args: any[]): number {
        let maxPrice = 0;
        let minPrice = 0;
        value.forEach(bid => {
            if (args.length > 1 && bid.uid !== args[1]) {
                return;
            }
            if (bid.price > maxPrice) {
                maxPrice = bid.price;
            }
            if (bid.price < minPrice) {
                minPrice = bid.price;
            }
        });
        if (args.length > 0 && args[0] === 'min') {
            return minPrice;
        } else {
            return maxPrice;
        }
    }

}
