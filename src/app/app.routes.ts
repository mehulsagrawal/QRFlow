import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { ViewQrComponent } from './view-qr/view-qr.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default to home
  { path: 'home', component: HomeComponent },
  { path: 'create-qr', component: CreateQrComponent },
  { path: 'view-qr', component: ViewQrComponent },
];
