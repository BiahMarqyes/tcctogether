import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { HttpClientModule } from '@angular/common/http';
import { MenuAuthDirective } from './menu-auth.directive';

@NgModule({
  declarations: [AppComponent, MenuAuthDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule,
            AngularFireModule.initializeApp(
              {
                apiKey: "AIzaSyDpr46AI1XNYjuNLeT-gaXymHi8Rjm6lm4",
                authDomain: "tecece-9938a.firebaseapp.com",
                projectId: "tecece-9938a",
                storageBucket: "tecece-9938a.appspot.com",
                messagingSenderId: "946856601170",
                appId: "1:946856601170:web:395ebb2af58a3d287de18b",
                measurementId: "G-84YX78PSNB"
              }
            ), AngularFireAuthModule, AngularFireDatabaseModule, HttpClientModule
           ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
