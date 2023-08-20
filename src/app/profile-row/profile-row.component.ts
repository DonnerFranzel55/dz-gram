import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() displayname = "Fredarik";
  @Input() path = "assets/img/userUploads/1.webp";
  @Input() username = "fredarik910";
  @Input() canFollow = true;


  constructor(public fs: FriendService){}
}
