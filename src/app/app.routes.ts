import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateQrComponent } from './create-qr/create-qr.component';
import { ViewQrComponent } from './view-qr/view-qr.component';
import { UrlPageComponent } from './create-qr/url-page/url-page.component';
import { MobileAppPageComponent } from './create-qr/mobile-app-page/mobile-app-page.component';
import { ImagePageComponent } from './create-qr/image-page/image-page.component';
import { EmailPageComponent } from './create-qr/email-page/email-page.component';
import { CallPageComponent } from './create-qr/call-page/call-page.component';
import { SmsPageComponent } from './create-qr/sms-page/sms-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default to home
  { path: 'home', component: HomeComponent },
  { path: 'create-qr', component: CreateQrComponent },
  { path: 'view-qr', component: ViewQrComponent },
  { path: 'url-link', component: UrlPageComponent },
  { path: 'mobile-app', component: MobileAppPageComponent },
  { path: 'image', component: ImagePageComponent },
  { path: 'email', component: EmailPageComponent },
  { path: 'call', component: CallPageComponent },
  { path: 'sms', component: SmsPageComponent },
];
