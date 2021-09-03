import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/model/profile';

@Component({
  selector: 'app-display-profile-items',
  templateUrl: './display-profile-items.component.html',
  styleUrls: ['./display-profile-items.component.css'],
})
export class DisplayProfileItemsComponent implements OnInit {
  @Input()
  profile: Profile;

  constructor() {}

  ngOnInit(): void {}
}
