import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import {AuthService } from './auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: string;

  constructor(
    platform: Platform,
    public authService: AuthService,
    statusBar: StatusBar, 
    splashScreen: SplashScreen,) {    

      this.rootPage = this.authService.isAuthenticated() ? 'Tabs' : 'Authenticate';
      platform.ready().then(() => {
        
        statusBar.styleDefault();
        splashScreen.hide();
      });
  }
  

}
