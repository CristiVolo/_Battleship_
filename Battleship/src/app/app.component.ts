import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import * as firebase from 'firebase/app';
//import {onShipPlacement} from './components/tutorial/tutorial.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  logo:string ="assets/images/imageedit_19_3329358286_i.png";
  title = 'Battleship';
  //title = 'firebase-angular-auth';

  // Check if you are signed in
  isSignedIn = false
  //Check on what tab you are
  onHomeTab = true
  onTutorialTab = false
  onLeaderboardTab = false
  onContactTab = false
  onAboutTab = false

  // Tab switch methods
  switchToHome() {

    this.onHomeTab = true
    this.onTutorialTab = false
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false
  }

  switchToTutorial() {

    this.onHomeTab = false
    this.onTutorialTab = true
    this.onLeaderboardTab = false
    this.onContactTab = false
    this.onAboutTab = false
  }

  constructor(public firebaseService : FirebaseService){}
  SignUpForm:FormGroup | undefined;

  ngOnInit(){

    this.SignUpForm=new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }


  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  resetPassword(email:string){
    return firebase.default.auth().sendPasswordResetEmail(email)
    .then(() => console.log("We've sent you a password reset link"))
    .catch(error => console.log(error.message))
  }

/*
  tabClick(tab:MatTabChangeEvent){
      if(tab.tab.textLabel=="SIGN UP"){
    
      }else console.log("SIGN IN MARIA");
  }
*/

 }
