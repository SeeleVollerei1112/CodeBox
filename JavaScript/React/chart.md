<!-- @format -->

1.  C -> 上传数据:(excel,csv,api)
    S -> 解析数据：(python)
    从一个二维结构(excel,csv,api)的数据中获得 dataset:
    eg: ['product', '2012', '2013', '2014', '2015'],
    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]

2.  C -> 用户配置图表 1. 数据解析方式： row, column 2. 图表样式 : 折线图, 柱状图， 饼图， 散点图 3. 基本配置:
    通用：
    legend, tooltip, title, toolbox
    直角坐标系：
    默认模板： legend, tooltip, title, toolbox
    配置： series 的颜色
    S -> 服务端提供对应组件的配置列表 1. 从提供的图表样式中选择对应的模板组件配置