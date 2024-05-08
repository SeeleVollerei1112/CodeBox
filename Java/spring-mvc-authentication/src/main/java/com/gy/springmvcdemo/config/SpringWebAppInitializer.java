package com.gy.springmvcdemo.config;

import jakarta.servlet.MultipartConfigElement;
import jakarta.servlet.ServletRegistration;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * 配置DispatcherServlet
 * 相当于web.xml配置DispatcherServlet
 *
 * AbstractAnnotationConfigDispatcherServletInitializer
 * 会同时创建DispatcherServlet和ContextLoaderListener。
 */
public class SpringWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    /**
     * 获取RootWebApplicationContext的配置类.
     *
     * 返回的带有@Configuration注解的类,
     * 将会用来配置ContextLoaderListener创建的应用上下文中的bean。
     * @return
     */
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { AppConfig.class };
    }

    /**
     * 获取ServletWebApplicationContext的配置类.
     *
     * 当DispatcherServlet启动的时候，它会创建Spring应用上下文，
     * 并加载配置文件或配置类中所声明的bean。
     *
     * 该方法返回配置类。
     *
     * 返回带有@Configuration注解的类，将会用来定义DispatcherServlet应用上下文中的bean。
     * @return
     */
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { WebMvcConfig.class };
    }

    /**
     * 配置dispatcherServlet的映射。
     * @return
     */
    @Override
    protected String[] getServletMappings() {
        // 处理所有的请求，包括对应用的静态资源(css,js,image)请求。
        return new String[]{"/"};
    }

    // MultipartConfig
    // Servlet 3.0上传文件配置
    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
        // 配置上传文件相关的选项，至少配置location
        registration.setMultipartConfig(new MultipartConfigElement("d:/temp"));
    }
}
