import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  }

  submit(){
    const formData = this.form.getRawValue();

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation
    }
    this.http.post('http://localhost:8000/api/register', data).subscribe(
      result => {
        console.log('success');
        console.log('result');
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }
}
