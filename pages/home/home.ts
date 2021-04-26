import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  price : number;
  months: number;
  downpayment: number;
  
  loanamount: number;
  monthlypayment: number;
  downpaymentamount: number;
  interest:number;
  totalinterest:number;
  

  constructor(public navCtrl: NavController) {}

    calculateLOAN() {

      this.downpaymentamount = this.price*this.downpayment / 100;
      this.loanamount = this.price - this.downpaymentamount;
      this.interest= 0.3026;
      this.monthlypayment = (this.loanamount + this.interest) / this.months;
      this.totalinterest = (this.loanamount * this.interest) / 100;
      
      this.downpaymentamount = parseFloat(this.downpaymentamount.toFixed(2));
      this.loanamount = parseFloat(this.loanamount.toFixed(2));
      this.monthlypayment = parseFloat(this.monthlypayment.toFixed(2));
      this.totalinterest = parseFloat(this.totalinterest.toFixed(2));

    }
}
