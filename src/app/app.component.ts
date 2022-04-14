import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  user: any = localStorage.getItem('user');

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.loggedIn();
  }

  loggedIn() {
    if (localStorage.getItem('user') !== null) {
      this.user = true;
      return this.user;
    } else {
      this.user = false;
      return this.user;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    this.loggedIn();
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
