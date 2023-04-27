import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() {
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
    this.bookEmitter.emit(this.book);
  }
}
