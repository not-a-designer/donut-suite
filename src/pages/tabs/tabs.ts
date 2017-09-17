import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root: string = 'Home';
  tab2Root: string = 'Counts';
  tab3Root: string = 'Marchese';

  constructor() {

  }
}
