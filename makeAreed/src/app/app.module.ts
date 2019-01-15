import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReedService } from './services/reed';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReedComponent } from './reed/reed.component';
import { NavComponent } from './nav/nav.component';
import { AllreedsComponent } from './allreeds/allreeds.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReedComponent,
    NavComponent,
    AllreedsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ReedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
