import { Component } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent {
  isActive: boolean = true;  // Default: First button is active

  toggleButton(state: boolean) {
    if (this.isActive !== state) { 
      this.isActive = state; // Toggle only if not already active
    }
  }
}
