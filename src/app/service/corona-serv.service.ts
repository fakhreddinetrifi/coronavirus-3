import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'https://coronavirus-19-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CoronaServService {
  constructor(private http: HttpClient) { }
  getAll() {
  return this.http.get(`${API_URL}/all`);
  }

  getCountries() {
    return this.http.get(`${API_URL}/countries`);
  }
}
