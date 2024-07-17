package com.gy.ssm.service;

import com.gy.ssm.entity.Book;

import java.util.List;

public interface BookService {
    Book findBookById(int id);
    List<Book> findAllBooks();
    Book addBook(Book book);
}
