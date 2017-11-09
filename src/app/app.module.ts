import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentService } from './shared/service/content.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppBootstrapModule } from './bootstrap/bootstrap.module';
import { HomeComponent } from './home/home.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PhonesComponent } from './phones/phones.component';
import { PhoneService } from './shared/service/phone.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhonesComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,
  ],
  providers: [ContentService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
