import { Component } from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   
welcome='<--------PRODUCT_ENTRY-------->';
 clickMessage = '';

        products : [{
        product_name: string,
        product_code : string,
        product_price:string;
        product_gst:string;
    }];
  onClickMe() {
    this.clickMessage ='2';
  }

  onSearchMe(){
    this.products = null;
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:2500/searchdb',false)
    xhttp.send();
    this.products = JSON.parse( xhttp.responseText);
    console.log(xhttp.responseText);
  }


      constructor()
      {
        this.welcome = "<--------PRODUCT_ENTRY-------->"

       this.products = null;
          var xhttp = new XMLHttpRequest();
          xhttp.open('GET', 'http://localhost:2500/fetchallproductdetails', false);
          xhttp.send();
          this.products = JSON.parse(xhttp.responseText);
          console.log(xhttp.responseText);
        };       
        

} 
 
 
 
 