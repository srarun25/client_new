import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginFlag: boolean = localStorage.getItem('token') != null;
  constructor(private router: Router, private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.loginSubject.subscribe(
      (res) => {
        this.loginFlag = res;
      },
      (err) => {}
    );
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    this.loginFlag = false;
    this.router.navigate(['/user/login']);
  }
}
