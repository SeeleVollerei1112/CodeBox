package com.gy.cbl.service.impl;

import com.gy.cbl.dao.UserMapper;
import com.gy.cbl.dto.LoginRequest;
import com.gy.cbl.entity.User;
import com.gy.cbl.service.UserService;
import org.jasypt.util.password.PasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncryptor passwordEncryptor;

    @Override
    public User login(LoginRequest loginRequest) {
        User user = userMapper.findByEmail(loginRequest.getEmail());
        // 验证密码
        if (user != null && passwordEncryptor.checkPassword(loginRequest.getPassword(), user.getPassword())) {
            // 验证email和password匹配
            return user;
        }
        // 返回null表示登录不成功
        return null;
    }
}
