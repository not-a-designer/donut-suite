import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { DonutService } from '../../app/donut.service';
import { Ingredient } from '../../models/ingredient.model';


const FULL_CAKE_YIELD: number = 10;
const FULL_YEAST_YIELD: number = 8;

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class Recipe {

  public selectedDonut: any;
  public pageTitle: string = '';
  public batch: number;
  public myQuantity: number[];
  public myTypes: string[] = [];
  public myYield: number;
  public batchParams: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public donutService: DonutService) {

    this.selectedDonut = this.navParams.get('selectedDonut');
    this.batch = this.navParams.get('batchSize');
    this.batchParams = this.navParams.get('batches');
    this.myQuantity = [];
    this.pageTitle = this.selectedDonut.type + ' ' + this.selectedDonut.flavor;
    //this.myTypes = [];

    this.myTypes = this.getTypes(this.selectedDonut.ingredients);

    for (let myIng of this.selectedDonut.ingredients) {  //for each ingredient in selectedDonut
      if (this.myTypes.indexOf(myIng.type) == -1) {
        this.myTypes.push(myIng.type);
      }
    }

    if (this.selectedDonut.flavor !== 'yeast') {
      this.myYield = this.batch * FULL_CAKE_YIELD;
    } else {
      this.myYield = this.batch * FULL_YEAST_YIELD;
    }

    console.log('navParam -selectedDonut- = ' + this.selectedDonut);
    console.log('navParam -batchSize- = ' + this.batch);
    console.log('navParam -batches- = ' + this.batchParams);
    console.log('myTypes = ' + this.myTypes);

    this.pageTitle = this.selectedDonut.type + ' ' + this.selectedDonut.flavor;

    for (let ing of this.selectedDonut.ingredients) {
      let newQ = Math.round(ing.amount * this.batch);
      this.myQuantity.push(newQ);
    }
  }

  ionViewDidLoad() {
    
  } 

  showSteps() {
    this.modalCtrl.create('Instructions', { steps: this.selectedDonut.instructions }).present();
  }

  dismiss() {
    this.navCtrl.pop();
  }

  getTypes(values: Ingredient[]) {
    return values.reduce((prev: string[], cur: Ingredient) => {
      if (prev.indexOf(cur.type) == -1) {
        prev.push(cur.type);
      }
      return prev;
    }, []);
  }
}
