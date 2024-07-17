package com.gy.cbl.service;

import com.gy.cbl.dto.PageResult;
import com.gy.cbl.entity.Book;

public interface BookService {
    // 查询最新上架的图书
    PageResult<Book> selectNewBooks(Integer pageNum, Integer pageSize);
    Book findById(int id);
    //借阅图书
    int borrow(Book book);
}
