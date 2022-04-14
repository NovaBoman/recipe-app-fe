import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  login() {
    const formData = this.form.getRawValue();

    this.http
      .post('https://nova-recipe-be.herokuapp.com/api/login', formData)
      .subscribe({
        next: (result: any) => {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', result.user.username);
          localStorage.setItem('userId', result.user.id);
          this.router.navigate(['/secure']).then(() => {
            window.location.reload();
          });
        },
        error: (error) => {
          console.log('error');
          console.log(error);
        },
      });
  }
}
