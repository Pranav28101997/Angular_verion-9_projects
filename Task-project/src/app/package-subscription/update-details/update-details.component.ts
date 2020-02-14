import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {
  emailAddress = '';
  mobileNumber = '';
  onEmptyClick = false;
  onclick = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
 if (this.emailAddress === '' && this.mobileNumber === '') {
   this.onEmptyClick = true;
 } else {
  this.onclick = true;
 }
  }

}
