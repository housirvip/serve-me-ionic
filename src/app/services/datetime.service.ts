import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class DatetimeService {

    // tslint:disable-next-line:variable-name
    private _date: Date;


    constructor(private datePipe: DatePipe) {
        console.log('date in service be init');
        this._date = new Date();
    }

    // return the hours string of available
    getTimeString(currentDate: Date) {
        let ret = '';
        if (this._date.getDate() === currentDate.getDate()) {
            console.log(this._date.getHours());
            console.log();
            for (let i = this._date.getHours() + 1; i <= 23; i++) {
                i === 23 ? ret += i.toString() : ret += i.toString() + ',';
            }
        } else {
            ret = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
        }
        return ret;
    }
    getDatestring() {
        return this.datePipe.transform(this._date, 'yyyy-MM-dd');
    }

    convertWithFormat(date: Date, format: string) {
        return this.datePipe.transform(date, format);
    }


}


