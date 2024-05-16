package com.gy.cbl.controller;

import com.gy.cbl.dto.LoginRequest;
import com.gy.cbl.entity.User;
import com.gy.cbl.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

// user属性是存在session
@SessionAttributes({"user"})
@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService userService;

    /**
     * 显示登录页面
     */
    // GET
    @GetMapping
    public String show() {
        return "admin/login";
    }

    /**
     * 处理登录请求
     */
    // POST
    @PostMapping
    public String handle(LoginRequest loginRequest, Model model, HttpSession session) {
        User user = userService.login(loginRequest);
        if (user != null) {
            // 将user加入model，并且会加入到session
            model.addAttribute("user", user);
//            session.setAttribute("user", user);
            // 跳转到首页
            return "redirect:/main";
        }

        model.addAttribute("msg", "用户名或密码错误");
        return "admin/login";
    }
}
