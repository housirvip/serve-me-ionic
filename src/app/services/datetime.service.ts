import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  // tslint:disable-next-line:variable-name
  private _date: Date;


  constructor(private datePipe: DatePipe) {
    this._date = new Date();
  }

  // return 2020-02-13
   getDatestring() {
     return  this.datePipe.transform(this._date, 'yyyy-MM-dd');
  }


}
