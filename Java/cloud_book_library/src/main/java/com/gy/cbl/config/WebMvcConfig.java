package com.gy.cbl.config;

import org.hibernate.validator.HibernateValidator;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.nio.charset.StandardCharsets;
import java.util.Properties;

@ComponentScan({"com.gy.cbl.controller", "com.gy.cbl.exception"})
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
        registry.addViewController("/main").setViewName("admin/main");
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

    /**
     * 不配置MessageSource和LocalValidatorFactoryBean，
     * 默认错误消息文件位置：classpath:ValidationMessages.properties
     * 一定要用messageSource这个名字？
     * An application context delegates the message resolution to a bean with the exact name messageSource.
     *
     * @return
     */
    @Bean
    MessageSource messageSource() {
        ReloadableResourceBundleMessageSource ms = new ReloadableResourceBundleMessageSource();
        ms.setBasename("classpath:errorMessages"); // 文件后缀是.properties
        ms.setDefaultEncoding(StandardCharsets.UTF_8.name()); // utf-8
        ms.setCacheSeconds(20); // 缓存时间20秒
        return ms;
    }

    //if we had already extended the WebMvcConfigurerAdapter, to avoid having the custom validator ignored,
    // we'd have to set the validator by overriding the getValidator() method from the parent class.
    // 必须使用override来覆盖getValidator，要不然自定义消息不起作用
    //custom name messages in a properties
    @Override
    public Validator getValidator() {
        LocalValidatorFactoryBean localValidatorFactoryBean = new LocalValidatorFactoryBean();
        // 配置validation api的实现类
        localValidatorFactoryBean.setProviderClass(HibernateValidator.class);
        // 配置验证消息源
        localValidatorFactoryBean.setValidationMessageSource(messageSource());
        return localValidatorFactoryBean;
    }
}
