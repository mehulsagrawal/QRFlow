import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-url-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './url-page.component.html',
  styleUrls: ['./url-page.component.css']
})
export class UrlPageComponent {

  http = inject(HttpClient); // Inject HttpClient

  urlObj: any = {
    "name": "Custom URL",
    "organization": "949",
    "qr_type": 2,
    "campaign": {
      "content_type": 1,
      "custom_url": ""
    },
    "location_enabled": false,
    "attributes": {
      "color": "#2595ff",
      "colorDark": "#2595ff",
      "margin": 80,
      "isVCard": false,
      "frameText": "UNIQODE",
      "logoImage": "https://d1bqobzsowu5wu.cloudfront.net/15406/36caec11f02d460aad0604fa26799c50",
      "logoScale": 0.1992,
      "frameColor": "#2595FF",
      "frameStyle": "banner-bottom",
      "logoMargin": 10,
      "dataPattern": "square",
      "eyeBallShape": "circle",
      "gradientType": "none",
      "eyeFrameColor": "#2595FF",
      "eyeFrameShape": "rounded"
    }
  };

  goBack() {
    let pathArray = window.location.pathname.split('/'); // Get URL parts
    if (pathArray.length > 1) {
      pathArray.pop();
      let newPath = pathArray.join('/') + '/create-qr'; // Ensure correct URL structure
      window.location.href = newPath; // Redirect to new URL
    }
  }

  header = new HttpHeaders({
    'Authorization': 'Token e62435a78e67ec98bba3b879ba00448650032557',
  });

  onSave() {
    this.http.post("https://api.uniqode.com/api/2.0/qrcodes/", this.urlObj, { headers: this.header })
      .subscribe(
        response => {
          console.log("QR Code created:", response);
        },
        error => {
          console.error("Error creating QR Code:", error);
        }
      );
  }
}
