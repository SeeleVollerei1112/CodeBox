package com.gy.ssm.service.impl;

import com.gy.ssm.config.AppConfig;
import com.gy.ssm.dao.BookMapper;
import com.gy.ssm.entity.Book;
import com.gy.ssm.service.BookService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

// 通过该注解初始化应用上下文
@SpringJUnitConfig(AppConfig.class)
class BookServiceImplTest {
    @Autowired
    private BookService bookService;

    @Test
    void findBookById() {
        Book book = bookService.findBookById(1);
        assertEquals(1, book.getId());
        assertEquals("Java EE企业级应用开发教程", book.getName());
        assertEquals("人民邮电出版社", book.getPress());
        assertEquals("黑马程序员", book.getAuthor());
    }

    @Test
    void addBook() {
        Book book = new Book();
        book.setId(100000);
        book.setName("java");
        book.setAuthor("张三");
        book.setPress("人邮出版社");
        bookService.addBook(book);

        Book bookInserted = bookService.findBookById(book.getId());
        assertEquals(book.getId(), bookInserted.getId());
        assertEquals(book.getName(), bookInserted.getName());
        assertEquals(book.getPress(), bookInserted.getPress());
        assertEquals(book.getAuthor(), bookInserted.getAuthor());
    }
}