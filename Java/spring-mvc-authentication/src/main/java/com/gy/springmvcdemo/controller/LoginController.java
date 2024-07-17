package com.gy.springmvcdemo.controller;

import com.gy.springmvcdemo.entity.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {
    @Value("${user.session.key}")
    private String userSessionKey;

    // 显示登录页面
    @GetMapping
    public String showLogin() {
        return "login";
    }

    @PostMapping
    public String handleLogin(User user, HttpSession session, Model model) {
        // 获取用户名和密码
        String username = user.getUsername();
        String password = user.getPassword();
        // 此处模拟从数据库中获取用户名和密码后进行判断
        if (username != null && username.equals("admin")
                && password != null && password.equals("123456")) {
            // 将用户对象添加到Session
            session.setAttribute(userSessionKey, user);
            //用户登录成功，转发到系统首页
            return "main";
        }
        //如果用户名和密码不匹配，转发到登录页面，并进行提醒
        model.addAttribute("msg", "用户名或密码错误，请重新登录！");
        return "login";
    }
}
