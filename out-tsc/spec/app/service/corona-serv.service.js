import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
const API_URL = 'https://coronavirus-19-api.herokuapp.com';
let CoronaServService = class CoronaServService {
    constructor(http, db) {
        this.http = http;
        this.db = db;
    }
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
};
CoronaServService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, AngularFireDatabase])
], CoronaServService);
export { CoronaServService };
//# sourceMappingURL=corona-serv.service.js.map