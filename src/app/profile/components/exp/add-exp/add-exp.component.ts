import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  experience: any = {};
  errors: any = {};
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {}
  experienceSubmit() {
    this.profileService.addExperience(this.experience).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.errors = err;
      }
    );
  }
}
