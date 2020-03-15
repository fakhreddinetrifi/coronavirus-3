import { Component, OnInit } from '@angular/core';
import {CoronaServService} from '../service/corona-serv.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  info: any = null;
  searchCountry;
  constructor(private coronaServ: CoronaServService) {}

  ngOnInit(): void {
    this.coronaServ.getCountries().subscribe(
        data => {
          this.info = data;
        }
    );
  }
}
