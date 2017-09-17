import { Injectable } from '@angular/core';

import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  
    public token: string;
    public user: any = null;
    public loggedIn: boolean = false;

    constructor() {

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (error) => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    firebase.auth().onAuthStateChanged( (user) => {
                        this.user = user;
                        if(this.user != null) {
                            this.loggedIn = true;
                        }
                        else {
                            this.loggedIn = false;
                        }
                    });
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => {
                                this.user = firebase.auth().currentUser;
                                this.loggedIn = true;
                                this.token = token;

                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                            }
                        );
                }
            )
            .catch(
                (error) => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.user = null;
        this.loggedIn = false;
        this.token = null;
        console.log('user = ' + this.user);
        console.log('loggedIn = ' + this.loggedIn);
        console.log('token = ' + this.token);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    this.user = firebase.auth().currentUser;
                    this.loggedIn = true; 
                    this.token = token;
                    console.log('current user = ' + this.user);
                    console.log('token = ' + this.token);
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
        return this.token;

    }

    isAuthenticated() {
        console.log('loggedIn = ' + this.loggedIn);
        return this.loggedIn;
    }
}