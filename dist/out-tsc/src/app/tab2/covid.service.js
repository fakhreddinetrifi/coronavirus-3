import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URLS = {
    confirmed: 'https://coronavirus-tracker-api.herokuapp.com/confirmed',
    deaths: 'https://coronavirus-tracker-api.herokuapp.com/deaths',
    recovered: 'https://coronavirus-tracker-api.herokuapp.com/recovered',
};
let CovidService = class CovidService {
    constructor(http) {
        this.http = http;
    }
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
};
CovidService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], CovidService);
export { CovidService };
//# sourceMappingURL=covid.service.js.map