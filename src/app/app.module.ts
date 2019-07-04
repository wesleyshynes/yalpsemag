import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Store
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBootstrapComponent } from './game-bootstrap/game-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { SimpleBaselineComponent } from './simple-baseline/simple-baseline.component';



@NgModule({
  declarations: [
    AppComponent,
    GameBootstrapComponent,
    HomeComponent,
    SimpleBaselineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
        userInfo: userReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
