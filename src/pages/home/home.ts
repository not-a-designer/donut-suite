import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { DataStorageService } from '../../app/datastorage.service';
import { AuthService } from '../../app/auth.service';
import { DonutService} from '../../app/donut.service';
import { PrepService } from '../../app/prep.service';

import { Donut } from '../../models/donut.model';
import { PrepItem } from '../../models/prepitem.model';

/*const CAKE_STEPS: string[] = [
    '1. Beat dry and fat on speed 1 until there are no clumps (10 mins)',
    '2. Add wet and milk and mix on speed 1 just until incorporated',
    '3. Scrape dry clumps from the bottom of the bowl. Mix on speed 3 for 10-20 secs'
];*/

/*const YEAST_STEPS: string[] = [
    '1. Combine yeast, small sugar and first milk in a small bowl, whisk together',
    '2. Add small flour on top (no whisk) and place in warm area (near stove, etc)',
    '3. In meduim mixer, combine eggs/replacer and large sugar. whisk on speed 3',
    '4. Add oil mixer while still beating on speed 3',
    '5. When yeast mixture has grown, add to mixer, incorporate at speed 1, add milk, and incorporate',
    '6. Swap whisk attachment for dough hook, add dry ingredients in thirds, mixing on speed 1',
    '7. Set timer for 12 minutes to mix'
];*/

/*const BABY_SPICE_STEPS: string[] = [
    '1. Melt shorting until clear. Combine with sugar and beat on speed 1 until incorporated',
    '2. Scrape unmixed sugar from the bottom of the bowl. Add applesauce and combine on speed 1',
    '3. Scrap unmixed sugar from the bottom of the bowl. Add milk mixture and combine on speed 1',
    '4. Add dry in thirds and mix until incorporated',
    '5. Scrape dry clumps from the bottom of the bowl. beat on speed 3 for 10-20 secs'
];*/

//const FULL_CAKE_YIELD: number = 10;
//const FULL_YEAST_YIELD: number = 8;

//const DONUT_TYPES: string[] = ['Gluten-friendly', 'Gluten-friendly Vegan', 'Raised', 'Regular', 'Vegan'];
//const DONUT_FLAVORS: string[] = ['Cake', 'Chocolate', 'Pumpkin', 'Baby Spice', 'Yeast', 'Vegan Yeast', 'Gingerbread', 'Red Velvet', 'Banana'];
//const INGREDIENT_TYPES: string[] = ['Dry', 'Fat', 'Wet', 'Milk', 'Yeast', 'Sugar', '\"Eggs\"'];


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  public pageTitle: string = 'Recipes';
  public recipes: string = '';

  public batchSizePartial: string[] = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
  public batchSizeFull: number[] = [0, 1, 2];

  public prepBatchSizes: number[] = [0, 1, 2, 3, 4, 5, 6];
  public prepBatches: number[] = [];

  public donutList: Donut[] = [];
  public prepList: PrepItem[] = []

  public fullBatches: number[] = [];
  public partialBatches: string[] = [];
  public batchCount: number[] = [];
  public totalBatches: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public donutService: DonutService,
    public prepService: PrepService,
    public dataStorage: DataStorageService) {

    this.recipes = 'doughnuts';
    this.refreshDonutList();
    //this.donutList = this.donutService.getDonuts();
    //this.initializeBatches();
    //this.refreshDonutList();
    /*if (!this.donutList || this.donutList === [] || this.donutList == null) {
      this.refreshDonutList();
      for (let i = 0; i < this.donutList.length; i++) {
        this.fullBatches.push(0);
        this.partialBatches.push('0');
        this.batchCount.push(0);
      }
      this.totalBatches = '0';
    }*/
  }

  ionViewDidEnter() {
    /*if (!this.donutList || this.donutList === [] || this.donutList == null) {
      this.refreshDonutList();
      for (let i = 0; i < this.donutList.length; i++) {
        this.fullBatches.push(0);
        this.partialBatches.push('0');
        this.batchCount.push(0);
      }
      this.totalBatches = '0';
    }*/
  }


  ionViewDidLoad() {
    this.refreshDonutList();
  }

  refreshDonutList() {
    this.dataStorage.getDonuts();
    let loader = this.loadingCtrl.create();
    setTimeout(() => {
      //this.dataStorage.getDonuts();
      this.donutList = this.donutService.getDonuts();
      this.initializeBatches();
      loader.dismiss();
    }, 1000);
    loader.present();
    console.log('Donut list = ' + this.donutList);
  }

  refreshPrepList() {
    this.dataStorage.getPrepList();
    let loader = this.loadingCtrl.create();
    setTimeout(() => {
      this.prepList = this.prepService.getPrepList();
      this.initializePrepBatches();
      loader.dismiss();
    }, 1000);
    loader.present();
    console.log('Prep list =' + this.prepList);
  }

  showRecipeModal(idx: number) {

    //if there are no partial batches 
    if (this.partialBatches[idx] === '0') {

      this.batchCount[idx] = this.fullBatches[idx];
      this.totalBatches = this.fullBatches[idx].toString();
      console.log(this.fullBatches[idx]);
      

    //evaluate and add total batches
    } else {

      let numOut: number = this.fullBatches[idx] + eval(this.partialBatches[idx]);
      console.log('numOut ' + numOut);

      if (numOut > 10) {
        let myString = numOut.toString().split('.');
        numOut = Number(myString[0]) / 10;
        numOut += Number('.' + myString[1]);
        console.log('numOut = ' + numOut);
      }
      this.batchCount[idx] = numOut;

      if (this.fullBatches[idx] === 0) {
        this.totalBatches = this.partialBatches[idx];
      } else {
        this.totalBatches = this.fullBatches[idx].toString() + '-' + this.partialBatches[idx];
      }

      console.log('full ' + this.fullBatches[idx] + ', partial ' + eval(this.partialBatches[idx]));
    }
    
    
    console.log('batchCount index = ' + idx);
    console.log('batchCount['+ idx + '] = ' + this.batchCount[idx]);

    if (this.batchCount[idx] > 0) {

      this.navCtrl.push('Recipe', {
        selectedDonut: this.donutList[idx],
        batchSize: this.batchCount[idx],
        batches: this.totalBatches
      });

    } else {
      this.toastCtrl.create({
        message: 'Error: No batch size',
        position: 'middle',
        duration: 3000
      }).present();
    }    
  }

  initializeBatches() {
    if(this.donutList.length > -1) {
      for (let i = 0; i < this.donutList.length; i++) {
        this.fullBatches.push(0);
        this.partialBatches.push('0');
        this.batchCount.push(0);
      }
      this.totalBatches = '0';
    } else {
      this.refreshDonutList();
      for (let i = 0; i < this.donutList.length; i++) {
        this.fullBatches.push(0);
        this.partialBatches.push('0');
        this.batchCount.push(0);
      }
      this.totalBatches = '0';
    }
  }

  initializePrepBatches() {
    if (this.prepList.length > -1) {
      for (let i = 0; i < this.prepList.length; i++) {
        this.prepBatches.push(0);
      }
    } else {
      this.refreshPrepList();
      for (let i = 0; i < this.prepList.length; i++) {
        this.prepBatches.push(0);
      }
    }
    console.log('Initialize prep batches');
  }


  showPrepModal(index: number) {
    if (this.prepBatches[index] > 0) {
      this.navCtrl.push('PrepRecipe', {
        selectedPrepItem: this.prepList[index],
        batchSize: this.prepBatches[index]
      });
    } else {
      this.toastCtrl.create({
        message: 'Error: No batch size',
        position: 'middle',
        duration: 3000
      }).present();
    }
  }

  resetBatch(idx: number) {
    this.fullBatches[idx] = 0;
    this.partialBatches[idx] = '0';
    this.batchCount[idx] = 0;
    this.totalBatches = '0';
  }

  resetBatches() {

    for (let i = 0; i < this.donutList.length; i++) {
      this.resetBatch(i);
    }
    console.log('fullbatches: ' + this.fullBatches);
    console.log('partialbatches: ' + this.partialBatches);
    console.log('batchcount: ' + this.batchCount);
    console.log('totalbatches: ' + this.totalBatches);
  }
  
}
