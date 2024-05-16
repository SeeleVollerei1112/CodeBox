package com.gy.cbl.dao;

import com.github.pagehelper.Page;
import com.gy.cbl.entity.Book;

public interface BookMapper {
    Page<Book> selectNewBooks();
    Book getById(int id);
    int edit(Book book);
}
