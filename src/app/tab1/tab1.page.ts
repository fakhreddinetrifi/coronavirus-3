import {Component, OnInit, ViewChild} from '@angular/core';
import {CoronaServService} from '../service/corona-serv.service';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  info: any = null;
  @ViewChild('barChart', {static: false}) barChart;

  bars: any;
  colorArray: any;
    constructor(private coronaServ: CoronaServService, private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    this.presentLoading().then(() => {
      this.coronaServ.getAll().subscribe(data => {
        this.info = data;
        this.createBarChart(this.info);
        this.loadingCtrl.dismiss();
      },
          error1 => console.log(error1),
          () => this.loadingCtrl.dismiss()
      );
    });
  }
  createBarChart(info) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Cases Confirmed', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: '# of Votes',
            data: [info.cases, info.deaths, info.recovered],
            backgroundColor: [
              'rgba(194,0,0)',
              'rgba(0,0,0)',
              'rgba(0,164,91)',
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
