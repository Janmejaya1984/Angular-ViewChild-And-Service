import { Injectable } from '@angular/core';
import { BOOKS } from './book/books-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks(){
    return BOOKS;
  }
}
