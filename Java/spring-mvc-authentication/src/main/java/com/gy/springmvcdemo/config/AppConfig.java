package com.gy.springmvcdemo.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * 跟web无关的组件
 */
@PropertySource("classpath:application.properties")
@Configuration
public class AppConfig {
}
