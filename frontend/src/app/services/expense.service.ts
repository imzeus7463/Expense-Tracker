import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://127.0.0.1:8000/api/expenses/';
  private token = localStorage.getItem('access_token');

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` })
    });
  }
}
