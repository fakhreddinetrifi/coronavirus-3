import { Component, OnInit } from '@angular/core';
import {CoronaServService} from '../service/corona-serv.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  info: any = null
  constructor(private coronaServ: CoronaServService, private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    this.coronaServ.getAll().subscribe(data => {
      this.info = data;
    });
  }

  presentLoading() {
    const loading = this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
  }
}
