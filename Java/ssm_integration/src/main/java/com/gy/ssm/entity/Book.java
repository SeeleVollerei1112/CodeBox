package com.gy.ssm.entity;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

@Data
public class Book {
    private Integer id;		//图书id

    @NotBlank(message = "{name.empty}")
    private String name;		//图书名称

    @NotBlank(message = "{press.empty}")
    private String press;		//出版社

    @NotBlank(message = "{author.empty}")
    @Pattern(regexp = "//W+", message = "{author.illegal})")
    private String author;		//作者

//    @Min(value = 1)
//    @Max(value = 1000)
    @Range(min = 1, max = 1000)
    private Integer stock;		//库存
}
