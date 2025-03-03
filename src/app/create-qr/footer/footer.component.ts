import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  goBack() {
    let pathArray = window.location.pathname.split('/');  // Get URL parts
    if (pathArray.length > 1) {
        pathArray.pop();
        let newPath = pathArray.join('/create-qr') || '/create-qr';  // Ensure it doesn't become empty
        window.location.href = newPath;  // Redirect to new URL
    }
  }
}
