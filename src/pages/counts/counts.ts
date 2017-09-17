import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';

import { DataStorageService } from '../../app/datastorage.service';
import { DonutFlavorService, decoratedFlavorList } from '../../app/donutflavor.service';


@IonicPage()
@Component({
  selector: 'page-counts',
  templateUrl: 'counts.html',
})
export class Counts {

  public pageTitle: string = 'Counts';
  public toolbarTitle: string = 'Total';
  public countsFor: string = '';
  public flavors: string[] = [];
  public myFlavors: string[] = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public donutFlavors: DonutFlavorService,
    public dataStorage: DataStorageService) {
  }

  ionViewDidLoad() {
    this.refreshFlavorList();
    if (this.myFlavors.length < 0) {
      this.myFlavors.push(decoratedFlavorList[0]);
    }
    console.log('ionViewDidLoad CountsPage');
  }


  refreshFlavorList() {
    this.dataStorage.getDecoratedDonutList();
    let loader = this.loadingCtrl.create();

    setTimeout(() => {
      this.flavors = decoratedFlavorList;
      //this.flavors = this.donutFlavors.getDonutFlavors();
      loader.dismiss();
    }, 1000);
    loader.present();
    console.log('flavors = ' + this.flavors);
  }


  showPopover(event) {
    let popover = this.popoverCtrl.create('Popover');

    popover.onDidDismiss((data: string) => {
        this.countsFor = data;
      });

    popover.present({
      ev: event
    });
  }



  addToList(d: string) {
    this.myFlavors.push(d);
  }
}
