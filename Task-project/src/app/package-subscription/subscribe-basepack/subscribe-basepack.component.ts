import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-subscribe-basepack',
  templateUrl: './subscribe-basepack.component.html',
  styleUrls: ['./subscribe-basepack.component.scss']
})
export class SubscribeBasepackComponent implements OnInit {

  constructor(private appService: AppService) { }
  accountBalance = this.appService.accountBalance;
  beforeSubscription = true;
  afterSubscription = false;
  pack = '';
  monthlyPrice = 100;
  months ;
  totalAmount = 0;
  discountAmount = 0;
  finalprice = 0;
  validation = false;
  ngOnInit(): void {
  }
  onSubmit() {

    if (this.pack !== '' && this.months !== 0 && this.months < 13 && this.months > 0) {
      this.beforeSubscription = false;
      this.afterSubscription = true;
      this.totalAmount = this.monthlyPrice * this.months;
      this.discountAmount = this.totalAmount * 10 / 100;
      this.finalprice = this.totalAmount - this.discountAmount;
      this.accountBalance=330;
      console.log('Message send Successfully !');
      console.log('Email send Successfully !');

    } else {
      this.validation = true;
    }

  }
}
