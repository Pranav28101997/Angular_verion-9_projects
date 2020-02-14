import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-view-packs',
  templateUrl: './view-packs.component.html',
  styleUrls: ['./view-packs.component.scss']
})
export class ViewPacksComponent implements OnInit {
  channels = [];
  packs = [];
  subscription = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // this.channels = this.appService.channels;
    this.packs = this.appService.packs;
    this.subscription = this.subscription;
    console.log(this.packs);
    
    this.appService.channels.forEach(data=>{
      this.channels.push({name:data.name,amount:data.amount});
    })
    console.log(this.channels);
  }

}
