import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css'],
})
export class AddEduComponent implements OnInit {
  education: any = {};
  errors: any = {};
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {}

  educationSubmit() {
    this.profileService.addEducation(this.education).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        this.errors = err;
      }
    );
  }
}
