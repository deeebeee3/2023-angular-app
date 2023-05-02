import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  /* obviously this called when class is initialized... */
  constructor(private booksService: BooksService) {
    console.log({ constructor: 'Books Constructor' });
  }

  books: Book[] = [];
  isShowing: boolean = true;

  /* when component is ready to be mounted on the DOM */
  ngOnInit(): void {
    console.log({ onInit: 'Books Component' });
    this.books = this.booksService.getBooks();
  }
}
