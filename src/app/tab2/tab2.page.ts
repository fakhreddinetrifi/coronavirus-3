import { Component, OnInit } from '@angular/core';
import {CoronaServService} from '../service/corona-serv.service';
import {LoadingController} from '@ionic/angular';
import {CovidService} from './covid.service';
import { ModalController } from '@ionic/angular';
import {DetailsPage} from '../details/details.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  info: any = null;
  searchCountry;
  countries: any = [];
  constructor(private coronaServ: CoronaServService, private loadingCtrl: LoadingController, private covidServ: CovidService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.presentLoading().then(() => {
      this.coronaServ.getCountries().subscribe(
          data => {
            this.info = data;
          },
          error1 => console.log(error1),
          () => this.loadingCtrl.dismiss()
      );
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await loading.present();
  }

  async presentModal(id, cases, deaths, recovered) {
    const modal = await this.modalController.create({
      component: DetailsPage,
        componentProps: {
            coronaDetailConfirmed: id,
          infoCases: cases,
          infoDeaths: deaths,
          infoRecovered: recovered
        }
    });
    return await modal.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
