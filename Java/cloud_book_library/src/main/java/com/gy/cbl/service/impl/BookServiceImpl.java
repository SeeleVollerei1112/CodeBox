package com.gy.cbl.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.gy.cbl.dao.BookMapper;
import com.gy.cbl.dto.PageResult;
import com.gy.cbl.entity.Book;
import com.gy.cbl.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class BookServiceImpl implements BookService {
    public static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
    @Autowired
    private BookMapper bookMapper;

    /**
     * 根据当前页码和每页需要展示的数据条数，查询最新上架的图书信息
     * @param pageNum 当前页码
     * @param pageSize 每页显示数量
     */
    @Override
    public PageResult<Book> selectNewBooks(Integer pageNum, Integer pageSize) {
        // 设置分页查询的参数，开始分页; pageNum从1开始
        PageHelper.startPage(pageNum, pageSize);
        Page<Book> res = bookMapper.selectNewBooks();
        return new PageResult(res.getTotal(), res.getResult());
    }

    @Override
    public Book findById(int id) {
        return bookMapper.getById(id);
    }

    @Override
    public int borrow(Book book) {
        //根据id查询出需要借阅的完整图书信息
        Book existingBook = this.findById(book.getId());
        if (existingBook == null) {
            // 不存在该书
            return 0;
        }
        book.setBorrowTime(DATE_FORMAT.format(new Date()));
        // 设置所借阅的图书状态为借阅中
        book.setStatus("1");
        //将图书的价格设置在book对象中
        book.setPrice(existingBook.getPrice());
        //将图书的上架设置在book对象中
        book.setUploadTime(existingBook.getUploadTime());
        return bookMapper.edit(book);
    }
}
