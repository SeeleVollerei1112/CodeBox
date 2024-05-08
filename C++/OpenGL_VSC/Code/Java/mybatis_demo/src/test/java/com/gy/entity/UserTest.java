package com.gy.entity;

import com.gy.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    public void testMybatis() throws IOException {
        try (InputStream is = Resources.getResourceAsStream("mybatis-config.xml")) {
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
                try (SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
                    UserMapper usermapper = sqlSession.getMapper(UserMapper.class);
                    int result = usermapper.insert();
                    System.out.println("result " + result);
                 }
        }
    }


    @Test
    public void testUpdate() throws IOException {
        try (InputStream is = Resources.getResourceAsStream("mybatis-config.xml")){
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
            try(SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
                userMapper.update();
            }
        }
    }

    @Test
    public void testDelete() throws IOException {
        try (InputStream is = Resources.getResourceAsStream("mybatis-config.xml")){
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
            try (SqlSession sqlSession = sqlSessionFactory.openSession(true)){
                UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
                userMapper.delete();
            }
        }
    }
}