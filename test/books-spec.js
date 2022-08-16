const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/'
const { default: axios } = require('axios');
const {expect, assert} = require('chai');
const should = require('chai').should();
const randomWords = require('random-words');
const bookStoreApi = require('../api/books-api');
const credentials = require('../credentials/credentials.json');

describe('Book store',async () => {
    it('GET book',async () => {
      await bookStoreApi.getBook(credentials.id);
    });
    it('GET all books',async () => {
      await bookStoreApi.getBook(credentials.allBooksId);
    });
    it('CREATE book',async () => {
      const newBook = await bookStoreApi.createBook();
      await bookStoreApi.getBook(newBook.data.id);
      await bookStoreApi.deleteBook(newBook.data.id);
    });
    it('UPDATE request',async () => {
      const newBook = await bookStoreApi.createBook();
      await bookStoreApi.updateBook(newBook.data.id);
      await bookStoreApi.deleteBook(newBook.data.id);
    });
    it('DELETE request',async () => {
      const newBook = await bookStoreApi.createBook();
      await bookStoreApi.getBook(newBook.data.id);
      await bookStoreApi.deleteBook(newBook.data.id);
    });

  });  
