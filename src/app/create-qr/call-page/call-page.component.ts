import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';

@Component({
  selector: 'app-call-page',
  imports: [HttpClientModule, FormsModule, ButtonToggleComponent], // Add HttpClientModule here
  templateUrl: './call-page.component.html',
  styleUrl: './call-page.component.css'
})
export class CallPageComponent {
  http = inject(HttpClient); // Inject HttpClient
  phoneNumber: string = '';
  qrType: string = "1";

  urlObj: any = {
    "name": "Call by phone",
    "organization": "639521",
    "qr_type": 2,
    "campaign": {  
        "content_type": 15,
        "phone_call": {
          "phone": null
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
    this.urlObj.campaign.phone_call.phone = this.phoneNumber;
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

  updateQrType() {
    this.qrType = this.qrType === "1" ? "2" : "1"; // Toggle between 1 and 2
  }
}
