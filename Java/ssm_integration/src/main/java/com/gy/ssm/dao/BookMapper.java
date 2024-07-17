package com.gy.ssm.dao;

import com.gy.ssm.entity.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * BookMapper.xml对应的路径在类路径跟包名一样，com/gy/ssm/dao
 */
//@Mapper
public interface BookMapper {
    Book findBookById(int id);
    List<Book> findAllBooks();
    int addBook(Book book);
}
