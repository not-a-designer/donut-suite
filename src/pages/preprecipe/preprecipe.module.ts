import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrepRecipe } from './preprecipe';

@NgModule({
  declarations: [
    PrepRecipe,
  ],
  imports: [
    IonicPageModule.forChild(PrepRecipe),
  ],
})
export class PrepRecipeModule {}
