import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user: string | null = localStorage.getItem('user');
  lists: any;
  form!: FormGroup;

  headers = new HttpHeaders({
  'Authorization': `Bearer ${localStorage.getItem('token')}`});

  constructor(private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private listService: ListService,
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: ''
    });

    this.listService.getLists().subscribe({
      next: result => this.lists = result
    });
  }

  submit(){
    const formData = this.form.getRawValue();

    this.http.post('http://localhost:8000/api/lists', formData, {headers: this.headers}).subscribe({
      next: (result: any) => {
        console.log('success');
        console.log(result);

        this.lists.push(result.list);
      },
      error: error => {
        console.log('error');
        console.log(error);
      }
    });
  }



}
