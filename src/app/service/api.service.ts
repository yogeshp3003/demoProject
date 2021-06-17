import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://dummyapi.io/data/api/';

  constructor(private http: HttpClient) { }

  getAllList() {
    return this.http.get<any>(this.baseUrl + 'user?limit=10',
      {
        headers: new HttpHeaders({ 'app-id': `60cb3d032a1af53afcc0e96c` })
      })
  }
}
