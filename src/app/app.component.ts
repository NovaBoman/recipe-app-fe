import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'recipe-app';

  loggedIn = false;

  ngOnInit(): void {
      this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){
    localStorage.removeItem('token'); 
    localStorage.removeItem('user');
    localStorage.removeItem('userId'); 
  }
}
