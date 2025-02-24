import { Component } from '@angular/core';
import { QrOptionCardComponent } from '../shared/components/qr-option-card/qr-option-card.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-qr',
  standalone: true,
  imports: [QrOptionCardComponent, ButtonToggleComponent, RouterLink, RouterOutlet],
  templateUrl: './create-qr.component.html',
  styleUrl: './create-qr.component.css'
})
export class CreateQrComponent {
  currentPath: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.url.subscribe(url => {
      this.currentPath = this.router.url;
    });
  }
}
