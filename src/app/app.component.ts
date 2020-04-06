import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Global',
      url: '/',
      icon: 'globe'
    },
    {
      title: 'Countries',
      url: 'tab2',
      icon: 'flag'
    },
    {
      title: 'Volunteer',
      url: 'volunteer',
      icon: 'body'
    },
    {
      title: 'Protection',
      url: 'protection',
      icon: 'shield-checkmark'
    },
    {
      title: 'About',
      url: 'about',
      icon: 'help-circle'
    }
  ];

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
