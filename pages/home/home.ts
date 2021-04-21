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
  LOANMessage: string;

  constructor(public navCtrl: NavController) {}

    calculateBMI() {
      this.loan = this.weight / (this.height*this.height);
      this.bmi = parseFloat(this.bmi.toFixed(2));

      if (this.bmi <18.5){
        this.bmiMessage = "underweight";
      }else if (this.bmi > 18.5 && this.bmi <25){
        this.bmiMessage = "Normal";
      }else if (this.bmi > 25 && this.bmi <30){
        this.bmiMessage = "Overweight";
      }else{
        this.bmiMessage = "Obese";
      }
    }
}
