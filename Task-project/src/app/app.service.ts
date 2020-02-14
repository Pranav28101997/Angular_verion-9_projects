import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  cardImage = '../../assets/Images/setupbox.png';
  accountBalance =100;
  packs = [
    {name: 'Gold', amount: '100 ₹'},
    {name: 'Silver', amount: '50 ₹'}];

  channels =[{name: 'Sony', amount: '10 ₹'},
  {name: 'StarPlus', amount: '20 ₹'},
  {name: 'Zee Cinema', amount: '15 ₹'},
  {name: 'Sony Max', amount: '20 ₹'}];

  subscription = [
    {name: 'LearnEnglish', amount: '200 ₹'},
    {name: 'LearnCooking', amount: '100 ₹'}];
  constructor() { }

  getComponentDetails() {
    return[
      {imageURL: this.cardImage, path: '/view-balance', title: 'View Account Balance'},
      {imageURL: this.cardImage, path: '/Recharge', title: 'Recharge your Account'},
      {imageURL: this.cardImage, path: '/view-packs', title: 'Know your existing pack'},
      {imageURL: this.cardImage, path: '/subscribe-basepack', title: 'Subscribe your basepack'},
      {imageURL: this.cardImage, path: '/add-channels', title: 'Add channels to pack'},
      {imageURL: this.cardImage, path: '/special-service', title: 'Add special service'},
      {imageURL: this.cardImage, path: '/subscription-details', title: 'Subscription details'},
      {imageURL: this.cardImage, path: '/update-details', title: 'Update your details'},
      // {imageURL: this.cardImage, path: '/sign-in', title: 'Exit'}
    ];
  }
}
