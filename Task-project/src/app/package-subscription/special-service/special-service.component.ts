import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-service',
  templateUrl: './special-service.component.html',
  styleUrls: ['./special-service.component.scss']
})
export class SpecialServiceComponent implements OnInit {
  services = '';
  onEmptyClick = false;
  onclick = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
 if (this.services === '') {
   this.onEmptyClick = true;
 } else {
  this.onclick = true;
  console.log('message sent Succussfully !!!');
  console.log('email sent Succussfully !!!');
 }
  }

}
