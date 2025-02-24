import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ButtonToggleComponent } from '../../../create-qr/button-toggle/button-toggle.component';
@Component({
  selector: 'app-qr-option-card',
  imports: [ButtonToggleComponent],
  templateUrl: './qr-option-card.component.html',
  styleUrl: './qr-option-card.component.css'
})
export class QrOptionCardComponent {
  @Input() title: string = '';        // Title of the card
  @Input() description: string = '';  // Description text
  @Input() iconClass: string = '';
}
