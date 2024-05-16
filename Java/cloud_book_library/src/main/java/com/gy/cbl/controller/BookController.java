package com.gy.cbl.controller;

import com.gy.cbl.dto.PageResult;
import com.gy.cbl.dto.Result;
import com.gy.cbl.entity.Book;
import com.gy.cbl.entity.User;
import com.gy.cbl.service.BookService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

@Controller
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/new")
    public String selectNewBooks(Model model) {
        PageResult<Book> pageResult = bookService.selectNewBooks(1, 5);
        model.addAttribute("pageResult", pageResult);
        return "admin/books_new";
    }

    @ResponseBody
    @GetMapping("/{id}")
    public Result<Book> findById(int id) {
        Book book = bookService.findById(id);
        if (null != book) {
            return new Result(true,"查询图书成功", book);
        }
        return new Result(false,"查询图书失败！");
    }

    @ResponseBody
    @PostMapping("/borrow")
    public Result borrowBook(Book book, @SessionAttribute User user) {
        //获取当前登录的用户姓名
        book.setBorrower(user.getName());
        int count = bookService.borrow(book);
        if (count > 0) {
            return new Result(true, "借阅成功，请到行政中心取书!");
        }
        return new Result(false, "借阅图书失败!");
    }
}
