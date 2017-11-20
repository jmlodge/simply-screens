import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentService } from './shared/service/content.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { PhonesComponent } from './phones/phones.component';
import { PhoneService } from './shared/service/phone.service';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';


import { AppBootstrapModule } from './bootstrap/bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhonesComponent,
    FooterComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
  ],
  providers: [ContentService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
