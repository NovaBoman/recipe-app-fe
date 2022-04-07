import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: ''
    })
  }

  login(){
    const formData = this.form.getRawValue();

    const data = {
      username: formData.username,
      password: formData.password,
    }
    this.http.post('http://localhost:8000/api/login', data).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/secure']);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
