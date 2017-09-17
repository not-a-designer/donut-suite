import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { DonutService } from './donut.service';
import { DonutFlavorService } from './donutflavor.service';
import { AuthService } from './auth.service';
import { PrepService } from './prep.service';

import { Donut } from '../models/donut.model';
import { PrepItem } from '../models/prepitem.model';

import * as firebase from 'firebase';
import 'rxjs/Rx';


@Injectable()
export class DataStorageService {


    public baseRef: firebase.database.Reference = firebase.database().ref();

    public doughRef: firebase.database.Reference = this.baseRef.child('/doughs');
    public prepRef: firebase.database.Reference = this.baseRef.child('/prep');
    public decoratedRef: firebase.database.Reference = this.baseRef.child('/decorated');

    constructor(
        private http: Http,
        private authService: AuthService,
        private donutService: DonutService,
        private donutFlavors: DonutFlavorService,
        private prepService: PrepService) {

    }


    /** DONUT STORAGE */
    setDonuts() {
        const myToken: string = this.authService.getToken();
        console.log('myToken = ' + myToken);
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put(this.doughRef + '.json?auth=' + myToken, this.donutService.getDonuts(), headers);
    }

    getDonuts() {
        const myToken: string = this.authService.getToken();
        console.log('myToken = ' + myToken);
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        this.http.get(this.doughRef + '.json?auth=' + myToken, headers).map(
            //returns json object type Response
            (response: Response) => {
                const donuts: Donut[] = response.json();
                console.log(donuts);
                return donuts;
            } //end .map
        ).subscribe(
            //expecting donut array
            (donuts: Donut[]) => {
                    this.donutService.setDonuts(donuts);
            }
        );
    }
    /** END DONUT STORAGE     */



    /** PREP STORAGE */
    setPrepList() {
        const myToken: string = this.authService.getToken();
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put(this.prepRef +'.json?auth=' + myToken, this.prepService.getPrepList(), headers);
    }
    getPrepList() {
        const myToken: string = this.authService.getToken();
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        this.http.get(this.prepRef + '.json?auth=' + myToken, headers).map(
            //returns object type Response
            (response: Response) => {
                let prepItems: PrepItem[] = response.json();
                for (let p of prepItems) {
                    if (!p['ingredients']) {
                        p['ingredients'] = [];
                    }
                }

                return prepItems;
            }
        ).subscribe(
            //expecting prepitem array
            (prepItems: PrepItem[]) => {
                this.prepService.setPrepList(prepItems);
            }
        );
    }
    /**END PREP STORAGE */
    



    

    setDecoratedDonutList(donuts: Donut[]) {
        const myToken = this.authService.getToken();
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put(this.decoratedRef +'.json&auth=' + myToken, this.donutFlavors.getDonutFlavors(), headers);

    }

    getDecoratedDonutList() {
        const myToken = this.authService.getToken();
        const headers = new Headers({
            'Authorization': 'Bearer ' + myToken,
            'Access-Control-Allow-Origin': '*'
        });

        this.http.get(this.decoratedRef + '.json&auth=' + myToken, headers)
            .map(
                (response: Response) => {
                    const flavors: string[] = response.json();
                    console.log(flavors);
                    return flavors;
                }
            ).subscribe(
                (flavors: string[]) => {
                    this.donutFlavors.setDonutFlavors(flavors);
                }
            );
    }
}