import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { Router, RouterModule, Routes } from '@angular/router';
import MyAppConfig from './config/my-app-config';
import {config} from 'rxjs';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment.prod';
import {FirebaseService} from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginStatusComponent,
  ],
    imports: [
        BrowserModule,
        MatSliderModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTabsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp({
        apiKey: "AIzaSyCWVqWEVYi-IafEmlQ5OUXGZIgsc0xG2XQ",
        authDomain: "battleship-3dc8e.firebaseapp.com",
        projectId: "battleship-3dc8e",
        storageBucket: "battleship-3dc8e.appspot.com",
        messagingSenderId: "461636576274",
        appId: "1:461636576274:web:6ad2197f849b24149be4cb",
        measurementId: "G-1GZGVE45E0"
        })

    ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
