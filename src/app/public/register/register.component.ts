import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    this.http
      .post('https://nova-recipe-be.herokuapp.com/api/register', formData)
      .subscribe({
        next: (result) => {
          this.route.navigate(['/login']);
        },
        error: (error) => {
          console.log('error');
          console.log(error);
        },
      });
  }
}
