import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/profile/model/profile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: any;
  /* Profile = {
    handle: '',
    status: '',
    company: '',
    website: '',
    location: '',
    skills: [],
    gitusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    user: '',
  }; */
  errors: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}
  profileSubmit() {
    console.log(JSON.stringify(this.profile));
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }

  ngOnInit(): void {
    const userid = JSON.parse(localStorage.getItem('userDetails') || '{}').id;
    this.profileService.getProfileDetailsByUserId(userid).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profile = res;
      },
      (err) => {
        if (err.error.status === '401') {
          this.router.navigate(['/user/login']);
        }
        this.profile = null;
        console.log(JSON.stringify(err));
      }
    );
  }
}
