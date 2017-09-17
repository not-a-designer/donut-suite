import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recipe } from './recipe';

@NgModule({
  declarations: [
    Recipe,
  ],
  imports: [
    IonicPageModule.forChild(Recipe),
  ],
})
export class RecipeModule {}
