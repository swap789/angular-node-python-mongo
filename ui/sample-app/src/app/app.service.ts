import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getTest() {
    return this.httpClient.get('http://localhost:3000/api/test');
  }
}
