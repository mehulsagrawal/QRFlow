import { Component } from '@angular/core';
import { QrOptionCardComponent } from '../shared/components/qr-option-card/qr-option-card.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-qr',
  imports: [QrOptionCardComponent, ButtonToggleComponent, RouterLink],
  templateUrl: './create-qr.component.html',
  styleUrl: './create-qr.component.css'
})
export class CreateQrComponent {

}
