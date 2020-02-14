import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.scss']
})
export class ViewBalanceComponent implements OnInit {
 remaainingBalance=0;
  constructor() { }

  ngOnInit(): void {
    this.remaainingBalance=100;
  }

}
