package com.gy.ssm.service.impl;

import com.gy.ssm.dao.BookMapper;
import com.gy.ssm.entity.Book;
import com.gy.ssm.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookMapper bookMapper;

    @Transactional(readOnly = true)
    @Override
    public Book findBookById(int id) {
        if (id <= 0) {
            throw new IllegalArgumentException("id应该为正整数！");
        }
        return bookMapper.findBookById(id);
    }

    @Transactional(readOnly = true)
    @Override
    public List<Book> findAllBooks() {
        return bookMapper.findAllBooks();
    }

    @Transactional
    @Override
    public Book addBook(Book book) {
        bookMapper.addBook(book);
        return bookMapper.findBookById(book.getId());
    }
}
