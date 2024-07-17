DROP DATABASE IF EXISTS `cloud_book_library`;
CREATE DATABASE `cloud_book_library`;
USE `cloud_book_library`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `name` varchar(32),
    `password` varchar(256),
    `email` varchar(32),
    `role` varchar(32),
    `status` varchar(1),
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci;

# password:123456
INSERT INTO `user` VALUES (1, '黑马程序员', 'mO84eHS6BvXVoblfwAcHMZW1EPkZ7J8bOoPB8Q7i7Ybvg8kILcgLdGEM03+dSNei', 'itheima@itcast.cn', 'ADMIN', '0');
INSERT INTO `user` VALUES (2, '张三', 'mO84eHS6BvXVoblfwAcHMZW1EPkZ7J8bOoPB8Q7i7Ybvg8kILcgLdGEM03+dSNei', 'zhangsan@itcast.cn', 'USER', '0');

DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `name` varchar(32),
    `isbn` varchar(32),
    `press` varchar(32),
    `author` varchar(32),
    `page_count` int(11),
    `price` double(10, 0),
    `upload_time` varchar(32),
    `status` varchar(1),
    `borrower` varchar(32),
    `borrow_time` varchar(32),
    `return_time` varchar(32),
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci;

INSERT INTO `book` VALUES (1, 'Java基础案例教程（第2版）', '9787115547477', '人民邮电出版社', '传智播客', 291, 59, '2020-12-11', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (2, '挪威的森林', '9787546205618', '上海译文出版社', '村上春树', 380, 34, '2020-12-12', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (4, 'JavaWeb程序设计任务教程', '9787115439369', '人民邮电出版社', '传智播客', 419, 56, '2020-12-14', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (5, 'Java基础入门（第2版）', '9787302511410', '清华大学出版社', '传智播客', 413, 59, '2020-12-15', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (6, 'SpringCloud微服务架构开发', '9787115529046', '人民邮电出版社', '传智播客', 196, 43, '2020-12-16', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (7, 'SpringBoot企业级开发教程', '9787115512796', '人民邮电出版社', '传智播客', 270, 56, '2020-12-17', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (8, 'Spark大数据分析与实战', '9787302534327', '清华大学出版社', '传智播客', 228, 49, '2020-12-18', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (10, '边城', '9787543067028', '武汉出版社', '沈从文', 368, 26, '2020-12-20', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (12, '自在独行', '9787535488473', '长江文艺出版社', '贾平凹', 320, 39, '2020-12-22', '0', NULL, NULL, NULL);
INSERT INTO `book` VALUES (13, '沉默的巡游', '9787544280662', '南海出版公司', '东野圭吾', 400, 59, '2020-12-23', '1', '张三', '2012-12-11', '2012-12-23');


DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `book_name` varchar(32),
    `book_isbn` varchar(32),
    `borrower` varchar(32),
    `borrow_time` varchar(32),
    `return_time` varchar(32),
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci;

INSERT INTO `record` VALUES (23, 'Java基础案例教程（第2版）', '9787115547477', '张三', '2020-12-21', '2020-12-21');
INSERT INTO `record` VALUES (24, '沉默的巡游', '9787544280662', '张三', '2020-12-11', '2021-01-06');


