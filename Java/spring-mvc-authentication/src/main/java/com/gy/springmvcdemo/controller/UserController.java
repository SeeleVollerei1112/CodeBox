package com.gy.springmvcdemo.controller;


import com.gy.springmvcdemo.dto.AvatarDto;
import com.gy.springmvcdemo.entity.User;
import jakarta.servlet.http.HttpSession;
import org.aspectj.util.FileUtil;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping("/{id}")
    public User getById(@PathVariable long id) {
        User user = new User();
        user.setId(id);
        user.setUsername("李白");
        user.setRole("admin");

        System.out.println("UserController#getById");
        return user;
    }

    @PostMapping("/avatar")
    public String uploadAvatar(@RequestPart("avatar") MultipartFile avatar, String username) throws IOException {
//      public String uploadAvatar(AvatarDto avatarDto) throws IOException {
//        MultipartFile avatar = avatarDto.getAvatar();
//        avatar.transferTo(Paths.get("d:/avatar"));

        avatar.transferTo(Paths.get("d:\\avatar", avatar.getOriginalFilename()));

//        Path path = Paths.get("d:\\avatar", String.valueOf(System.currentTimeMillis()));
//        Files.write(path, avatar.getBytes(), StandardOpenOption.CREATE);

        return "main";
    }

//    @GetMapping("/avatar")
//    public ResponseEntity<byte[]> downloadAvatar(String filename) throws IOException {
//        File file = Paths.get("d:\\avatar", filename).toFile();
//
//        HttpHeaders headers = new HttpHeaders();
//        // 设置消息头
//        headers.setContentDispositionFormData("attachment", filename);
//        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//
//        return new ResponseEntity<>(FileUtil.readAsByteArray(file), headers, HttpStatus.OK);
//    }
    @GetMapping("/avatar")
    public ResponseEntity<Resource> downloadAvatar(String filename) throws IOException {
        File file = Paths.get("d:\\avatar", filename).toFile();

        final  HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        //防止中文乱h码

        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        Resource resource = new ByteArrayResource(FileUtil.readAsByteArray(file));
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
}
