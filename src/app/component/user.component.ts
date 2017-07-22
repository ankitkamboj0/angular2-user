import { Component } from '@angular/core';
import { postServices } from '../services/posts.service';

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
            <li *ngFor= "let hobby of hobbies; let i = index">
                {{hobby}}<button (click)="remove(i)">*{{i}}</button>
            </li>
        </ul>
        <form (submit)="addHobby(hoby.value)">
            <input name="hobb" #hoby />
        </form>
    </div>
    <form>
        Email : <input name="eml" [(ngModel)]="email"/>
    </form>
  </div>
  `,
  providers : [postServices],
})
export class UserComponent {
  name:string;
  email: string;
  address: address;
 hobbies: string[];
 showHobbies : boolean;
  constructor(private post : postServices){
      this.name = 'Rajan Gupta';
      this.email = 'rajan01@gmail.com';
      this.address = {
          street:'Modal Town',
          pin:'112200',
          contact:'Rajan',

      }
        this.hobbies = ['Cricket','Movies','Ram Leela','Khunchusna'];
        this.showHobbies = false;
        this.post.getPosts().subscribe(poss =>{
                console.log(poss)
        });

  }
toggleHobbies (){
    if (this.showHobbies == false) {
        this.showHobbies=true;
    } else {
         this.showHobbies=false;
    }
  
}

addHobby(hobby){
    if(this.hobbies)
    this.hobbies.push(hobby);
  }
 
  remove(i){
       this.hobbies.splice(i,1);
      console.log(i);
  }
}
 interface address{
      street:string,
      pin:string,
      contact:string,
  }
