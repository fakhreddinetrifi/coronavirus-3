import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

const API_URL = 'https://coronavirus-19-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CoronaServService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }
  getAll() {
  return this.http.get(`${API_URL}/all`);
  }

  getCountries() {
    return this.http.get(`${API_URL}/countries`);
  }
  getGovernements() {
    return this.db.list('governement');
  }
  getVolunteer() {
    return this.db.list('volunteer');
  }

}
