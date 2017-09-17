import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Authenticate } from './auth';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    Authenticate,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Authenticate),
  ],
  exports: [
    Authenticate
  ]
})
export class AuthenticateModule {}
