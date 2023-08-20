import { Component } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-frend-list',
  templateUrl: './frend-list.component.html',
  styleUrls: ['./frend-list.component.scss']
})
export class FrendListComponent {
  
  constructor(public fs: FriendService){}
   
}
