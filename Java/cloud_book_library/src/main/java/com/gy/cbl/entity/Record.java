package com.gy.cbl.entity;

import lombok.Data;

@Data
public class Record {
    private Integer id;
    private String bookName;
    private String bookisbn;
    private String borrower;
    private String borrowTime;
    private String returnTime;
}
