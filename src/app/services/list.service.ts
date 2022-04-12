import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  getLists() {
    return this.http.get('http://localhost:8000/api/lists', {
      headers: this.headers,
    });
  }

  getListById(id: number) {
    return this.http.get(`http://localhost:8000/api/lists/${id}`, {
      headers: this.headers,
    });
  }

  deleteEntry(id: number) {
    return this.http.delete(`http://localhost:8000/api/entry/${id}/delete`, {
      headers: this.headers,
    });
  }
}
