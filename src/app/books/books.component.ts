import { Component } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700,
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      image:
        'https://m.media-amazon.com/images/I/41Suou3DGEL._SX398_BO1,204,203,200_.jpg',
      amount: 800,
    },
    {
      name: 'Python Programming for Beginners',
      author: 'Philip Robbins',
      image:
        'https://m.media-amazon.com/images/I/51KVyDP3-uL._SX398_BO1,204,203,200_.jpg',
      amount: 650,
    },
    {
      name: 'How to Build Android Apps with Kotlin',
      author: 'Alex Forrester',
      image:
        'https://m.media-amazon.com/images/I/51CpyvyUJKL._SX404_BO1,204,203,200_.jpg',
      amount: 872,
    },
  ];

  isShowing: boolean = true;

  cart: Book[] = [];

  addToCart(event: Book) {
    console.log(event);
  }
}
