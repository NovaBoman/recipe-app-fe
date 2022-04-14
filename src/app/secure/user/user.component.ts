import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: string | null = localStorage.getItem('user');
  lists: any;
  form!: FormGroup;

  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
    });
    if (this.user) {
      this.listService.getLists().subscribe({
        next: (result: any) => (this.lists = result),
      });
    }
  }

  submit() {
    const formData = this.form.getRawValue();

    this.http
      .post('https://nova-recipe-be.herokuapp.com/api/lists', formData, {
        headers: this.headers,
      })
      .subscribe({
        next: (result: any) => {
          console.log('success');
          console.log(result);

          this.lists.push(result.list);
        },
        error: (error: any) => {
          console.log('error');
          console.log(error);
        },
      });
  }
}
