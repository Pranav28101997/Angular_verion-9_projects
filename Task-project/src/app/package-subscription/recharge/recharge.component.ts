import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  balance = 100;
 rechargeAmount = 0;
 totalBalance = 0;
 onclick = false;
 onEmptyClick = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.rechargeAmount === 0 || this.rechargeAmount < 0) {
      this.onEmptyClick = true;
    } else {
      this.onclick = true;
      this.totalBalance = this.balance + this.rechargeAmount;
    }
  }
}
