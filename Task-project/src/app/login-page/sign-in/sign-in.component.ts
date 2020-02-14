import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email = 'pranav.bhogawade@gmail.com';
  setPassword = 'pranav28';
  username;
  password;
  isInvalid = false;
  constructor(private route: Router,
    ) { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.username);
    console.log(this.password);

    if (this.username === this.email && this.password === this.setPassword){
      this.route.navigate(['/package-subscription']);
    } else {
      this.isInvalid = true;
    }
  }
}
