import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-package-subscription',
  templateUrl: './package-subscription.component.html',
  styleUrls: ['./package-subscription.component.scss']
})
export class PackageSubscriptionComponent implements OnInit {
  componentDetails = [];
  stockImage;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.componentDetails = this.appService.getComponentDetails();
    this.stockImage=this.componentDetails[0].imageURL;
    console.log('component details',this.componentDetails);
  }

}
