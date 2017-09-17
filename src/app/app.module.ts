import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { ComponentsModule } from '../components/components.module';

import { AuthService } from './auth.service';
import { DonutService } from './donut.service';
import { DonutFlavorService } from './donutflavor.service';
import { DataStorageService } from './datastorage.service';
import { PrepService } from './prep.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig: any = {
  apiKey: 'AIzaSyCMVBLF5fzJix2CQcjA51ymNnNuq-Oczgo',
  authDomain: 'recipelisthm.firebaseapp.com',
  databaseURL: 'https://recipelisthm.firebaseio.com',
  projectId: 'recipelisthm',
  storageBucket: 'recipelisthm.appspot.com',
  messageingSenderId: '94650626347'
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthService,
    DonutService,
    DonutFlavorService,
    DataStorageService,
    PrepService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
