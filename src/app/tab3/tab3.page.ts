import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {CovidService} from '../tab2/covid.service';
import {LoadingController} from '@ionic/angular';
import {CoronaServService} from '../service/corona-serv.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements  OnInit{
  @ViewChild('barChart', {static: false}) barChart;

  bars: any;
  colorArray: any;
  info;
  labels = []
  data = []
  governements: any
  constructor(private covidServ: CovidService, private loadingCtrl: LoadingController, private CoronaServ: CoronaServService) {
    this.info = []
    this.presentLoading().then(() => {
      this.covidServ.getCountry().subscribe(data => {
            this.info = data;
          },
          error1 => console.log(error1),
          () => {
            this.loadingCtrl.dismiss();
          });
    })
    this.CoronaServ.getGovernements().valueChanges().subscribe(
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
  ngOnInit(): void {
  }

  ionViewWillEnter() {
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


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await loading.present();
  }
}
