import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { NavController, AlertController } from 'ionic-angular';

import { AuthService } from '../../app/auth.service';
import { DonutService } from '../../app/donut.service';
import { DonutFlavorService } from '../../app/donutflavor.service';
import { PrepService } from '../../app/prep.service';
import { DataStorageService } from '../../app/datastorage.service';

import { Donut } from '../../models/donut.model';
import { PrepItem } from '../../models/prepitem.model';


@Component({
  selector: 'header',
  templateUrl: './header.html'
})
export class HeaderComponent {

  @Input() public title: string = '';
  @Input() public list: Donut[];
  @Input() public pList: PrepItem[];
  @Input() public fList: string[];


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private dataStorage: DataStorageService,
    private donutService: DonutService,
    private donutFlavors: DonutFlavorService,
    private prepService: PrepService) {
    console.log('Hello HeaderComponent Component');
  
  }


  ionViewDidLoad() {
    console.log('title = ' + this.title);
    this.dataStorage.setDonuts()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );

    this.dataStorage.setPrepList()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    //this.donutService.setDonuts(this.dataStorage.getDonuts());
  }

  logout() {
    this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to log out?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }, {
        text: 'Logout',
        handler: () => {
          this.authService.logout();
          this.navCtrl.setRoot('Authenticate');
        }
      }]
    }).present();
    
  }

  initDonuts() {
    this.donutService.setDonuts(this.list);
    this.dataStorage.setDonuts()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorage.getDonuts();
    console.log('header call, donutlist = ' + this.donutService.getDonuts());
    //this.donutService.setDonuts(this.donutList);
    



    /*
    this.donuts.setDonuts(this.list);
    console.log("Donuts initialized");*/
  }

  initPrepList() {
    this.prepService.setPrepList(this.pList);
    this.dataStorage.setPrepList()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorage.getPrepList();
  }

  initFlavors() {
    this.donutFlavors.setDonutFlavors(this.fList);
    this.dataStorage.setPrepList()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.dataStorage.getPrepList();
  }
}
