package com.gy.cbl.service.impl;

import com.gy.cbl.dao.UserMapper;
import com.gy.cbl.dto.LoginRequest;
import com.gy.cbl.entity.User;
import com.gy.cbl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    public User login(LoginRequest loginRequest) {
       User user = userMapper.findByEmail(loginRequest.getEmail());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            return user;
        }
       return null;
    }
}
