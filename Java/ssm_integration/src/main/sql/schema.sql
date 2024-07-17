CREATE DATABASE ssm;
USE ssm;
CREATE TABLE `book` (
    `id` int(11) primary key,
    `name` varchar(32) not null,
    `press` varchar(32) not null,
    `author` varchar(32) not null);

INSERT INTO `book` VALUES
    (1, 'Java EE企业级应用开发教程', '人民邮电出版社', '黑马程序员'),
    (2, 'MySQL应用', '清华大学出版社', '黑马程序员');
