package com.gy.cbl.entity;

import lombok.Data;
import org.springframework.asm.SpringAsmInfo;

@Data
public class User {
    private Integer id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private String status;
}
