import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-marchese',
  templateUrl: 'marchese.html',
})
export class Marchese {

  pageTitle: string = 'V. Marchese';
  department: string = 'tl';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarchesePage');
  }

}
