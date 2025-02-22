import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuValue: boolean = false;

  openMenu() {
    this.menuValue = !this.menuValue;
  }
}
