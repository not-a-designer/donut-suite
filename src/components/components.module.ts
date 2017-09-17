import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeaderComponent } from './header/header';
import { SignupComponent } from './signup/signup';
import { SigninComponent } from './signin/signin';


@NgModule({
	declarations: [
		HeaderComponent,
    	SignupComponent,
    	SigninComponent
	],

	imports: [
		IonicModule
	],

	exports: [
		HeaderComponent,
    	SignupComponent,
    	SigninComponent
	]
})
export class ComponentsModule {}
