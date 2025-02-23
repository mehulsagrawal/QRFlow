import { Component } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';

@Component({
  selector: 'app-home',
  imports: [InfoBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
