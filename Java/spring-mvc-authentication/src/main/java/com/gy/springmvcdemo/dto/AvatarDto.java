package com.gy.springmvcdemo.dto;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AvatarDto {
    private String username;
    // 当MultipartFile用在POJO对象中，必须配置multipartResolver
    private MultipartFile avatar;
}