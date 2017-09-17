import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class Authenticate {

  public authMethod: string = 'signin';
  public pageTitle: string ='Welcome';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  onNewUserCreated(ev: Event) {
    this.authMethod = 'signin';
  }

  doLogin() {
    this.navCtrl.setRoot('Tabs');
  }

  
}
