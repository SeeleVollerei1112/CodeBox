package com.gy.cbl.entity;

import lombok.Data;

@Data
public class Record {
    private Integer id;        //图书借阅id
    private String bookName;   //借阅的图书名称
    private String bookISBN;   //借阅的图书的ISBN编号
    private String borrower;   //图书借阅人
    private String borrowTime; //图书借阅时间
    private String returnTime; //图书归还时间
}
