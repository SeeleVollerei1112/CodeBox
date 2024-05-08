package com.gy.springmvcdemo.config;

import com.gy.springmvcdemo.interceptor.AuthenticationInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.view.BeanNameViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.util.Properties;

@ComponentScan({"com.gy.springmvcdemo.controller", "com.gy.springmvcdemo.exception"})
@Configuration
// 开启web mvc
@EnableWebMvc
// 扫描哪些注解，扫描控制器注解Controller
public class WebMvcConfig implements WebMvcConfigurer {
    @Bean
    public InternalResourceViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix("/WEB-INF/classes/views/");
        internalResourceViewResolver.setSuffix(".jsp");
        // 视图类JstlView
        internalResourceViewResolver.setViewClass(JstlView.class);
        return internalResourceViewResolver;
    }

    /**
     * 我们配置dispatcher servlet处理'/'，所有的请求都会通过它处理。
     * 对于静态资源的请求，不需要dispatcher servlet；
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // `classpath:`表示在类路径下查找
        // **代表下面的子路径或者文件
        // http://localhost:8080/spring_mvc_demo_war/css/main.css, 匹配/css/**， 资源名称main.css
        // classpath:/static/css/main.css
        // http://localhost:8080/spring_mvc_demo_war/js/main.js, 匹配/js/**， 资源名称main.js
        // classpath:/static/js/main.js
        registry.addResourceHandler("/js/**", "/css/**", "/img/**") // 资源访问URL模式
                .addResourceLocations("classpath:/static/js/",
                        "classpath:/static/css/", "classpath:/static/img/",
                        "classpath:/public/images/"); // 资源的查找路径
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 首页访问
        registry.addViewController("/main").setViewName("main");
        registry.addViewController("/orderInfo").setViewName("orderInfo");
        // 显示上传页面
        registry.addViewController("/upload").setViewName("upload");
    }

    @Bean
    public AuthenticationInterceptor authenticationInterceptor() {
        return new AuthenticationInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authenticationInterceptor());
    }

    /**
     * 上传文件必须配置MultipartResolver。
     * servlet 3.0开始，可以不配置multipartResolver。只配置MultipartConfigElement
     * @return
     */
    @Bean
    MultipartResolver multipartResolver() {
        // servlet 3.0之前必须配置
        // spring6不再对Common FileUpload进行支持，所以没有CommonsMultipartResolver
        // CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        StandardServletMultipartResolver resolver = new StandardServletMultipartResolver();
        return resolver;
    }
}
