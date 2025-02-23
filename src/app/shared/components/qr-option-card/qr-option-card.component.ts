import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-qr-option-card',
  imports: [],
  templateUrl: './qr-option-card.component.html',
  styleUrl: './qr-option-card.component.css'
})
export class QrOptionCardComponent {
  @Input() title: string = '';        // Title of the card
  @Input() description: string = '';  // Description text
  @Input() iconClass: string = '';
}
