package com.gy.springmvcdemo.interceptor;

import com.gy.springmvcdemo.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Arrays;

public class AuthenticationInterceptor implements HandlerInterceptor {
    @Value("${user.session.key}")
    private String userSessionKey;

    // 不需要认证的请求
    @Value("${not.requiring.login.urls}")
    private String[] notRequiringLoginUrls;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取请求的路径
        String uri = request.getRequestURI();
        //对用户登录的相关请求，放行
        if (Arrays.stream(notRequiringLoginUrls).anyMatch(u -> uri.indexOf(u) >= 0)) {
            // 继续往下交给其他拦截器或者请求处理方法处理
            return true;
        }
        // /main
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute(userSessionKey);
        if (null == user) {
            //session没有user，直接跳转到登录页面
            request.setAttribute("msg", "您还没有登录，请先登录！");
//            request.getRequestDispatcher("/login").forward(request, response);
//            response.sendRedirect("/login");
            request.getRequestDispatcher("/WEB-INF/classes/views/login.jsp").forward(request, response);
            return false;
        }
        return true;
    }
}
