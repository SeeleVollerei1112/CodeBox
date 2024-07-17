package com.gy.cbl.dao;

import com.gy.cbl.entity.User;

public interface UserMapper {
    User findByEmail(String email);
}
