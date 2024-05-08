package com.gy;

import com.gy.entity.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;

public class Application {
    public static void main(String[] args) throws IOException {
        String mybatisConfigFileName = "mybatis-config.xml";

        try (Reader reader= Resources.getResourceAsReader(mybatisConfigFileName)) {
            SqlSessionFactory sqlSessionFactory =
                    new SqlSessionFactoryBuilder().build(reader);
            try (SqlSession sqlSession = sqlSessionFactory.openSession()) {
                // selectOne用于查询一条数据
                // 第一个参数来自于UserMapper.xml中的select节点的id属性值：findById
                // 第二个参数代表传递给findById查询语句的参数值
                User user = sqlSession.selectOne("findById",1);
                System.out.println(user.getUname());
                // 第一个参数对应的是UserMapper文件中的mapper节点的namespace+.+节点select的id值
                user = sqlSession.selectOne("com.gy.entity.User.findById",1);
                System.out.println(user.getUname());
            }
        }
    }
}
