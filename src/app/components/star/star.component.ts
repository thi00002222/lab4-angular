import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit  {
  @Input() rating: number;
  starWidth: number;
  // @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.rating = 0;
    this.starWidth = this.rating*75/5;
  }

  ngOnChanges() {
    this.starWidth = this.rating*75/5;
  }
  
  onClick():void {
    alert( `Đánh giá của sản phẩm là ${this.rating} sao!`);
  }
  ngOnInit(): void { 
  }

}
