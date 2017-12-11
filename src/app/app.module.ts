import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

import { PhoneService } from './shared/service/phone.service';
import { ContentService } from './shared/service/content.service';

import { AppBootstrapModule } from './bootstrap/bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule, AccordionModule } from 'ngx-bootstrap';

import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    ContactFromComponent,
    MapComponent,
    PhoneDetailComponent,
    FilterPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAdyroGQrI4px5csmiFKy9ETbbaskqmxs'
    }),
    AppRoutingModule
  ],
  providers: [ContentService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
