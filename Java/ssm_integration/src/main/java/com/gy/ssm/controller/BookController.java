package com.gy.ssm.controller;

import com.gy.ssm.entity.Book;
import com.gy.ssm.service.BookService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.stream.Collectors;

@Controller
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

/*    @Autowired
    @Qualifier("bookValidator")
    private Validator bookValidator;*/

    @GetMapping("/{id}")
    public String findBookById(@PathVariable int id, Model model) {
        Book book = bookService.findBookById(id);
        model.addAttribute("book", book);
        return "book";
    }

    @GetMapping("/all")
    public String findAllBooks(Model model) {
        model.addAttribute("books", bookService.findAllBooks());
        return "books";
    }

    @PostMapping
//    public String addBook(Book book, Errors errors, Model model) {
    public String addBook(@Valid Book book, BindingResult errors, Model model) {
        /*// 验证数据
        bookValidator.validate(book, errors);
        // 检查errors，是否有错误
        if (errors.hasErrors()) {
            // 处理错误
            String fields = errors.getFieldErrors().stream()
                    .map(error -> error.getField()) // 获取有错误的字段名
                    .collect(Collectors.joining());
            throw new IllegalArgumentException(String.format("Book中以下字段有错误：%s", fields));
        }*/
        if (errors.hasErrors()) {
            // 处理错误
            String fields = errors.getFieldErrors().stream()
                    .map(error -> error.getField()) // 获取有错误的字段名
                    .collect(Collectors.joining(","));
            throw new IllegalArgumentException(String.format("Book中以下字段有错误：%s", fields));
        }

        Book bookInserted = this.bookService.addBook(book);
        model.addAttribute("book", bookInserted);
        return "book";
    }
}
