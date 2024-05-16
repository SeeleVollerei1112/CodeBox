package com.gy.cbl.config;

import org.jasypt.util.password.PasswordEncryptor;
import org.jasypt.util.password.StrongPasswordEncryptor;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

// 导入其他配置
@MapperScan("com.gy.cbl.dao")
@Import(DBConfig.class)
@ComponentScan({"com.gy.cbl.service"})
@Configuration
public class AppConfig {
    /**
     * 扫描Dao包，创建动态代理对象, 会自动存储到spring IOC容器
     * @return
     *//*
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer configurer = new MapperScannerConfigurer();
        // 指定要扫描Dao的基础包
        configurer.setBasePackage("com.gy.ssm.dao");
        return configurer;
    }*/

    @Bean
    PasswordEncryptor passwordEncryptor() {
        return new StrongPasswordEncryptor();
    }
}
