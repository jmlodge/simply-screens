import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { MapComponent } from './map/map.component';
import { PhoneService } from './shared/service/phone.service';
import { ContentService } from './shared/service/content.service';

import { AppBootstrapModule } from './bootstrap/bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServicesComponent},
  { path: 'contact', component: ContactFromComponent },
  { path: 'detail/:id', component: PhoneDetailComponent},
];


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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AppBootstrapModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAdyroGQrI4px5csmiFKy9ETbbaskqmxs'
    })
  ],
  providers: [ContentService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
