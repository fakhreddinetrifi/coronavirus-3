import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URLS = {
  confirmed: 'https://coronavirus-tracker-api.herokuapp.com/confirmed',
  deaths: 'https://coronavirus-tracker-api.herokuapp.com/deaths',
  recovered: 'https://coronavirus-tracker-api.herokuapp.com/recovered',
}
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }
  getConfirmedbyContries() {
    return this.http.get(API_URLS.confirmed);
  }
  getDeathsbyContries() {
    return this.http.get(API_URLS.deaths);
  }
  getRecoveredbyContries() {
    return this.http.get(API_URLS.recovered);
  }
  getHistoryCountry(country) {
    return this.http.get('https://corona.lmao.ninja/v2/historical/' + country);
  }
  getCountry() {
    return this.http.get('https://corona.lmao.ninja/countries/tunisia');
  }
}
