import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'Property-Card',
   templateUrl: './Property-Card.component.html',
   styleUrls: ['./Property-Card.component.scss']
})
export class PropertyCardComponent implements OnInit 
{
   property : any = {
      "Id": 1,
      "Type": "House",
      "Price": 15000,
      "Image":"DefaultHouse.jpg",
      "Address":"4th Ramsys Street"
   };
   
   constructor() 
   {

   }

   ngOnInit() 
   {

   }

}
