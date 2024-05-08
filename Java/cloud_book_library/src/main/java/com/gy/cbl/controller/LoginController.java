package com.gy.cbl.controller;

import com.gy.cbl.dto.LoginRequest;
import com.gy.cbl.entity.User;
import com.gy.cbl.service.UserService;
import com.oracle.wls.shaded.org.apache.xpath.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    public String show() {
        return "admin/login";
    }

    public String handle(LoginRequest loginRequest, Model model) {
        User user = userService.login(loginRequest);
        if (user != null)
            return "redirect:/admin/index";

        model.addAttribute("msg", "用户名或密码错误");
        return "admin/login";
    }
}

