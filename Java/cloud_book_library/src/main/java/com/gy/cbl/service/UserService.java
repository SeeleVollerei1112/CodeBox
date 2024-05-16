package com.gy.cbl.service;

import com.gy.cbl.dto.LoginRequest;
import com.gy.cbl.entity.User;

public interface UserService {
    User login(LoginRequest loginRequest);
}
