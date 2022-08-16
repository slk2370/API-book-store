'use strict';
const baseUrl = 'https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/'
const {expect, assert} = require('chai');
const { default: axios } = require('axios');
const credentials = require('../credentials/credentials.json');
const randomWords = require('random-words');

const titleFilling = randomWords(1) + Math.floor(Math.random()*200);
const newCredentials = {title: titleFilling, author:"MishaE"};

class BookStoreApi{
    async getBook(id){
        const getBook = await axios.get(baseUrl + id);
        expect(getBook.status).equal(200);   
        return getBook;
    }
    async createBook(){      
        const newBook = await axios.post(baseUrl + credentials.allBooksId,newCredentials);
        expect(newBook.status).equal(201);
        expect(newBook.data.author).equal('MishaE');
        return newBook;
    }

    async updateBook(id){
        const updatedBook = await axios.put(baseUrl + id, newCredentials);
        expect(updatedBook.status).eql(200);
        return updatedBook;
    }
    async deleteBook(id){
        const bookDel = await axios.delete(baseUrl + id);
        expect(bookDel.status).eql(200); 
        return bookDel;
    }
}
module.exports = new BookStoreApi;