package com.gy.cbl.service.impl;

import com.gy.cbl.config.AppConfig;
import com.gy.cbl.service.UserService;
import org.jasypt.util.password.PasswordEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import static org.junit.jupiter.api.Assertions.*;

// 通过该注解初始化应用上下文
@SpringJUnitConfig(AppConfig.class)
class UserServiceImplTest {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncryptor passwordEncryptor;

    @Test
    void login() {
        System.out.println(passwordEncryptor.encryptPassword("123456"));;
    }
}