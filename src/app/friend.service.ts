import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = ["You"]
  username = ["you"]
  images = ["assets/img/userUploads/4.webp"]
  constructor() { }


  addFriend(name:string, username:string, image:string) {
    this.names.push(name);
    this.username.push(username);
    this.images.push(image);
  }


}
