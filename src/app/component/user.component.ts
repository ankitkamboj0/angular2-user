import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <div>
    <h1>name:{{name}}</h1>
    <h2>Email:{{email}}</h2>
    <h3>Address is:{{address.street}},{{address.pin}}</h3>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
        <ul>
            <li *ngFor= "let hobby of hobbies">
                {{hobby}}
            </li>
        </ul>
    </div>
  </div>
  `
})
export class UserComponent {
  name:string;
  email: string;
  address: address;
 hobbies: string[];
 showHobbies : boolean;
  constructor(){
      this.name = 'Rajan Gupta';
      this.email = 'rajan01@gmail.com';
      this.address = {
          street:'Modal Town',
          pin:'112200',
          contact:'Rajan',

      }
        this.hobbies=['Cricket','Movies','Ram Leela','Khunchusna'];
        this.showHobbies=false;
  }
toggleHobbies (){
    if (this.showHobbies==false) {
        this.showHobbies=true;
    } else {
         this.showHobbies=false;
    }
  
}
 
}
 interface address{
      street:string,
      pin:string,
      contact:string,
  }
