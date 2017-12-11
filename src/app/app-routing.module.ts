import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { AboutComponent } from './about/about.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServicesComponent},
  { path: 'contact', component: ContactFromComponent },
  { path: 'detail/:id', component: PhoneDetailComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
