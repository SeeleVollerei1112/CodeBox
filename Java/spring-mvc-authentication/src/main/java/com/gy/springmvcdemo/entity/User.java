package com.gy.springmvcdemo.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

@Data
public class User {
    private long id;
    private String username;		//用户名
    private String password;		//用户密码
    private String role;
}

