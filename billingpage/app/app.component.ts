import { Component } from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


welcome=' PRODUCT_ENTRY';
    products : [{
        product_name: string,
        product_code : string,
        product_price:string;
        product_gst:string;
    }];

      constructor(){
        this.welcome = "Billing page"

        this.products = null;
          var xhttp = new XMLHttpRequest();
          xhttp.open('POST', 'http://localhost:2500/fetchallproductdetails', false);
          xhttp.send();
          this.products = JSON.parse(xhttp.responseText);
    };       
        

} 
 
 
 
 