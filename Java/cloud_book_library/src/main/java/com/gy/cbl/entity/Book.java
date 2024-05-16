package com.gy.cbl.entity;

import lombok.Data;

@Data
public class Book {
    private Integer id;        //图书编号
    private String name;       //图书名称
    private String isbn;       //图书标准ISBN编号
    private String press;      //图书出版社
    private String author;     //图书作者
    private Integer pageCount;//图书页数
    private Double price;      //图书价格
    private String uploadTime; //图书上架时间
    private String status;     //图书状态
    private String borrower;   //图书借阅人
    private String borrowTime; //图书借阅时间
    private String returnTime; //图书预计归还时间
}
