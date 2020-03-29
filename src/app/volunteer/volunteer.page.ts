import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {CoronaServService} from '../service/corona-serv.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {
  volunteers: any
  constructor(private callNumber: CallNumber, private coronaServ: CoronaServService) {
    coronaServ.getVolunteer().valueChanges().subscribe(
        data => {
          this.volunteers = data;
        }
    );
  }

  ngOnInit() {
  }

  call(num) {
    this.callNumber.callNumber(num, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }
}
