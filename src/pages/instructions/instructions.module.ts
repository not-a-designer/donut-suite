import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Instructions } from './instructions';

@NgModule({
  declarations: [
    Instructions,
  ],
  imports: [
    IonicPageModule.forChild(Instructions),
  ],
  exports: [
    Instructions
  ]
})
export class InstructionsModule {}
