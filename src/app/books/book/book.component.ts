import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  constructor(private cartService: CartService) {
    console.log({ constructor: 'Book Constructor' });
  }

  ngOnInit(): void {
    console.log({ onInit: 'Book Component' });
  }

  ngOnDestroy(): void {
    console.log({ onDestroy: 'Book Component' });
    /* Do some clean up here */
  }

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
