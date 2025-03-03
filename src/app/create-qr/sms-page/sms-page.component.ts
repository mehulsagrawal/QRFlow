import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sms-page',
  imports: [HttpClientModule, FormsModule],
  templateUrl: './sms-page.component.html',
  styleUrl: './sms-page.component.css'
})
export class SmsPageComponent {

http = inject(HttpClient); // Inject HttpClient
  
    urlObj: any = {
      "name": "SMS",
      "organization": "639521",
      "qr_type": 2,
      "campaign": {
          "content_type": 16,
          "phone_sms": {
              "phone": null,
              "body": null,
          }
      },
      "location_enabled":false,
      "attributes":{
          "color":"#2595ff",
          "colorDark":"#2595ff",
          "margin":80,
          "isVCard":false,
          "frameText":"UNIQODE",
          "logoImage":"https://d1bqobzsowu5wu.cloudfront.net/15406/36caec11f02d460aad0604fa26799c50",
          "logoScale":0.1992,
          "frameColor":"#2595FF",
          "frameStyle":"banner-bottom",
          "logoMargin":10,
          "dataPattern":"square",
          "eyeBallShape":"circle",
          "gradientType":"none",
          "eyeFrameColor":"#2595FF",
          "eyeFrameShape":"rounded"
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
      'Authorization': 'Token c982a2a2719fc02ae170c78da302686a07181340',
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
