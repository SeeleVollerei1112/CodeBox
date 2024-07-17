package com.gy.springmvcdemo.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LogoutController {
    // 跳转到系统首页，跳转到登录页面，跳转到订单信息页面，用户登录省略
    @GetMapping("/logout")
    public String logout(HttpSession session) { // 用户退出
        session.invalidate(); // 清除Session
        return "redirect:login"; // 退出登录后重定向到登录页面
    }
}
