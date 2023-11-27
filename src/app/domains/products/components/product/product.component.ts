import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // @Input({ required: true }) image: string = '';
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) title: string = '';
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addCartHandler() {
    console.log('addCartHandler');
    this.addToCart.emit(this.product);
  }
}
