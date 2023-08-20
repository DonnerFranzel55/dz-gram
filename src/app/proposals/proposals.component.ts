import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
 names=[
  "Markus",
  "Justus",
  "Rambo732"
 ]
 AtNames=[
  "markus",
  "justus",
  "rambo732"
 ]

 postImages=[
  "assets/img/userUploads/1.webp",
  "assets/img/userUploads/2.webp",
  "assets/img/userUploads/3.webp",
  "assets/img/userUploads/4.webp",
  "assets/img/userUploads/5.webp",
  "assets/img/userUploads/6.webp"
]
}
