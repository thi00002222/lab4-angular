import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TextstarPipe } from '../../pipes/textstar.pipe';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, FormsModule, StarComponent, RouterLink, RouterModule, RouterOutlet, TextstarPipe],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit, AfterViewInit{
  @ViewChild("starComp", { static: true }) starComponent !: StarComponent;
  ngAfterViewInit() {
    this.starComponent.onClick();
  }

  products: IProduct[]=[ 
    { 
      "productId": 1, 
      "productName": "Leaf Rake", 
      "productCode": "GDN-0011", 
      "releaseDate": "March 19, 2016", 
      "description": "Leaf rake with 48-inch wooden handle.", 
      "price": 19.95, 
      "starRating": 3.2, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "showImage": true
    }, 
    { 
      "productId": 2, 
      "productName": "Garden Cart", 
      "productCode": "GDN-0023", 
      "releaseDate": "March 18, 2016", 
      "description": "15 gallon capacity rolling garden cart", 
      "price": 32.99, 
      "starRating": 2.5, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      "showImage": true
    }, 
    { 
      "productId": 5, 
      "productName": "Hammer", 
      "productCode": "TBX-0048", 
      "releaseDate": "May 21, 2016", 
      "description": "Curved claw steel hammer", 
      "price": 8.9, 
      "starRating": 4.8, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
      "showImage": true
    }, 
    { 
      "productId": 8, 
      "productName": "Saw", 
      "productCode": "TBX-0022", 
      "releaseDate": "May 15, 2016", 
      "description": "15-inch steel blade hand saw", 
      "price": 11.55, 
      "starRating": 3.7, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
      "showImage": true
    }, 
    { 
      "productId": 10, 
      "productName": "Video Game Controller", 
      "productCode": "GMG-0042", 
      "releaseDate": "October 15, 2015", 
      "description": "Standard two-button video game controller", 
      "price": 35.95, 
      "starRating": 4.6, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
      "showImage": true
    } 
  ];
  
  listProduct:IProduct[]=[]; 
  constructor() { } 
  
  ngOnInit(): void { 
    this.listProduct=this.products; 
  } 
  
  _listFilter:string=''; // Biến lưu trữ giá trị bộ lọc hiện tại 
  get listFilter():string {
    return this._listFilter;  // Getter trả về giá trị hiện tại của bộ lọc
  }
  set listFilter(value:string) {
    this._listFilter = value; // Setter cập nhật giá trị bộ lọc
    this.products = this.listFilter ? this.performFilter(this.listFilter) : this.listProduct; // Cập nhật danh sách sản phẩm dựa trên bộ lọc
  }
  performFilter(filterBy: string):IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listProduct.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  toggleImage(product: IProduct): void {
    product.showImage = !product.showImage; // Phương thức này để chuyển đổi trạng thái hiển thị
    
  }

  
}
