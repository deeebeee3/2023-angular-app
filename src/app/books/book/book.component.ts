import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;

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
    this.cartService.add(this.book);
  }
}
