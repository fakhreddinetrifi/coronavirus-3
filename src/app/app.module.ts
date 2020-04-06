import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy, MenuController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import {DetailsPage} from './details/details.page';
import { Network } from '@ionic-native/network/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAJXNzYGJJ2iC1_ZYLHRJ-J_0Jph7YxZdg',
  authDomain: 'market-ee61c.firebaseapp.com',
  databaseURL: 'https://market-ee61c.firebaseio.com',
  projectId: 'market-ee61c',
  storageBucket: 'market-ee61c.appspot.com',
  messagingSenderId: '707989016325',
  appId: '1:707989016325:web:1d878743265ae105f2316c'
}

@NgModule({
  declarations: [AppComponent, DetailsPage],
  entryComponents: [DetailsPage],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule
  ],
  providers: [
    YoutubeVideoPlayer,
    Network,
    CallNumber,
      MenuController,
      SplashScreen,
      StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
