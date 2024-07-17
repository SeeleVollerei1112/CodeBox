package com.gy.ssm.validator;

import com.gy.ssm.entity.Book;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component("bookValidator")
public class BookValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.isAssignableFrom(Book.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        // 错误代码格式：属性名.错误类型
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "name.empty");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "author", "author.empty");
    }
}
