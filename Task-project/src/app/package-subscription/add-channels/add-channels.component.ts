import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-channels',
  templateUrl: './add-channels.component.html',
  styleUrls: ['./add-channels.component.scss']
})
export class AddChannelsComponent implements OnInit {
  channels = '';
  onclick = false;
  onBlankclick=false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.channels === '') {
     this.onBlankclick = true;
    }else{
      this.onclick=true;
    }
  }

}
