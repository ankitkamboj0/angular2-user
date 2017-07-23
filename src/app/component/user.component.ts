import { Component } from '@angular/core';
import { postServices } from '../services/posts.service';

@Component({
  selector: 'user',
  templateUrl:'user.component.html',
  providers : [postServices],
})
export class UserComponent {
  name:string;
  email: string;
  address: address;
 hobbies: string[];
 showHobbies : boolean;
 posts :post[];
  constructor(private post : postServices){
      this.name = 'Rajan Gupta';
      this.email = 'rajan01@gmail.com';
      this.address = {
          street:'Modal Town',
          pin:112200,
          contact:'Rajan',
      }
        this.hobbies = ['Cricket','Movies','Ram Leela','Khunchusna'];
        this.showHobbies = false;
        this.post.getPosts().subscribe(poss =>{
            this.posts = poss;
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
      pin:number,
      contact:string,
  }
    interface post{
        id:number;
        body:string;
        title:string;
        userId:number;
       }
