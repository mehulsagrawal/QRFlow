import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-toggle',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent {
  isActive: boolean = true;  // Default: First button is active
  currentMode: string = 'static';

  toggleButton(state: boolean) {
    if (this.isActive !== state) { 
      this.isActive = state; // Toggle only if not already active
      this.currentMode = state ? 'static' : 'dynamic';
    }
  }
}
