import {Injectable} from '@angular/core';    
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postServices{
    constructor(private http : Http){
        console.log('Post service Initiallized');
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json ());
    }
}