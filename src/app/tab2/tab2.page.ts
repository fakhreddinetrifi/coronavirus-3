import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CoronaServService} from '../service/corona-serv.service';
import {LoadingController} from '@ionic/angular';
import {CovidService} from './covid.service';
import { ModalController } from '@ionic/angular';
import {DetailsPage} from '../details/details.page';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('barChart', {static: true}) barChart;
  info: any = null;
  searchCountry;
  countries: any = [];
  type: string;

  bars: any;
  colorArray: any;
  tunisia;
  labels = []
  data = []
  governements: any;
  char = false
  constructor(private ref: ChangeDetectorRef, private coronaServ: CoronaServService, private loadingCtrl: LoadingController, private covidServ: CovidService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.type = 'tunisia'
    this.presentLoading().then(() => {
      this.coronaServ.getCountries().subscribe(
          data => {
            this.info = data;
          },
          error1 => console.log(error1),
          () => this.loadingCtrl.dismiss()
      );
    });

    this.covidServ.getCountry().subscribe(data => {
          this.tunisia = data;
        }
    );
    this.coronaServ.getGovernements().valueChanges().subscribe(
        (data: any) => {
          this.governements = data
          this.labels = [];
          this.data = [];
          data.forEach(value => {
            this.labels.push(value.nom);
            this.data.push(value.val);
          });
          this.pieCharts(this.labels, this.data);
        }
    );
  }
  pieCharts(labels, data) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'pie',
      data: {
        // tslint:disable-next-line:max-line-length
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            backgroundColor: [
              'rgb(99,66,210)',
              'rgb(89,213,253)',
              'rgb(255,149,120)',
              'rgb(251,107,128)',
              'rgb(59,167,86)',
              'rgb(101,99,255)',
              'rgb(252,190,44)',
              'rgb(10,36,99)',
              'rgb(216,49,91)',
              'rgb(0,100,148)',
              'rgb(220,73,58)',
              'rgb(67,146,241)',
              'rgb(140,30,7)',
              'rgb(108,209,61)',
              'rgb(23,146,22)',
              'rgb(180,119,217)',
              'rgb(229,229,229)',
              'rgb(225,53,53)',
              'rgb(85,23,67)',
              'rgb(248,85,50)',
              'rgb(62,82,73)',
              'rgb(2,61,47)',
              'rgb(229,193,166)',
              'rgb(234,247,213)',
              'rgb(0,0,0)',
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
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
