import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css']
})
export class SpreadsheetComponent implements OnInit {

  payDates:any[];
  baseDate:string;
  dateCount:number;

  constructor() {
    this.payDates = [];
    this.baseDate = '2016-05-20';
    this.dateCount = 10;
    this.setPayDates();
  }

  ngOnInit() {
    console.log(this.payDates)
  }

  setPayDates() {
    let payDate = new Date( this.baseDate.split('-') );
    const currentDate = new Date();
    while (this.payDates.length !== this.dateCount) {
      if (payDate > currentDate) {
        this.payDates.push( this.dateString(payDate) );
      }
      payDate.setDate(payDate.getDate() + 14);
    }
  }

  dateString(date) {
    const year  = date.getFullYear(),
        month = date.getMonth() + 1,
        day   = date.getDate();
    return `${year}-${(month < 10) ? '0'+month : month}-${(day < 10) ? '0'+day : day}`;
  }

}