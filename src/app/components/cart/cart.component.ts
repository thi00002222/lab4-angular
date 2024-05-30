import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { TextstarPipe } from '../../pipes/textstar.pipe';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, StarComponent, TextstarPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: IProduct[] = [
  { 
    "productId": 1, 
    "productName": "Leaf Rake", 
    "productCode": "GDN-0011", 
    "releaseDate": "March 19, 2016", 
    "description": "Leaf rake with 48-inch wooden handle.", 
    "price": 19.95, 
    "starRating": 3.2, 
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" 
}, 
{ 
    "productId": 2, 
    "productName": "Garden Cart", 
    "productCode": "GDN-0023", 
    "releaseDate": "March 18, 2016", 
    "description": "15 gallon capacity rolling garden cart", 
    "price": 32.99, 
    "starRating": 4.2, 
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png" 
}, 
{ 
    "productId": 5, 
    "productName": "Hammer", 
    "productCode": "TBX-0048", 
    "releaseDate": "May 21, 2016", 
    "description": "Curved claw steel hammer", 
    "price": 8.9, 
    "starRating": 4.8, 
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png" 
}, 

];
}
