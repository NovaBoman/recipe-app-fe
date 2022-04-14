import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getLists() {
    this.token = localStorage.getItem('token');
    return this.http.get('https://nova-recipe-be.herokuapp.com/api/lists', {
      headers: this.headers,
    });
  }

  getListById(id: number) {
    return this.http.get(
      `https://nova-recipe-be.herokuapp.com/api/lists/${id}`,
      {
        headers: this.headers,
      }
    );
  }

  deleteList(id: number) {
    return this.http.delete(
      `https://nova-recipe-be.herokuapp.com/api/lists/${id}/delete`,
      {
        headers: this.headers,
      }
    );
  }

  deleteEntry(id: number) {
    return this.http.delete(
      `https://nova-recipe-be.herokuapp.com/api/entry/${id}/delete`,
      {
        headers: this.headers,
      }
    );
  }
}
