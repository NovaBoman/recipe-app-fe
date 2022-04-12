import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;
  id: any;

  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): any {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(this.id, params);
      },
    });

    this.listService.getListById(this.id).subscribe({
      next: (result: any) => (this.list = result),

      error: (error: any) => {
        console.log('error');
        console.log(error);
      },
    });
  }

  deleteList(id: number) {
    return this.http
      .delete(`http://localhost:8000/api/lists/${id}/delete`, {
        headers: this.headers,
      })
      .subscribe({
        next: (result: any) => {
          console.log('success');
          console.log(result);
        },
        error: (error: any) => {
          console.log('error');
          console.log(error);
          this.list = false;
          return error;
        },
      });
  }
}
