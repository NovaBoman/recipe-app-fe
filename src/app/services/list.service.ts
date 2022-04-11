import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  constructor(private http: HttpClient) { }

    headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`});


    getLists(){
      return this.http.get('http://localhost:8000/api/lists', {headers: this.headers});
    }
}
