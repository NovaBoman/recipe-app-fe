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

    this.http.post('http://localhost:8000/api/register', formData).subscribe({
      next: result => {
        console.log('success');
        console.log(result);
      },
      error: error => {
        console.log('error');
        console.log(error);
      }
    });
  }
}
