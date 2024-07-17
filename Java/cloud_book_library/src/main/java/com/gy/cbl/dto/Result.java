package com.gy.cbl.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * 用于向页面传递信息的类
 */
@Data
public class Result<T> implements Serializable {
    //是否成功操作成功
    private boolean success;
    //需要传递的信息
    private String message;
    //需要传递的数据
    private T data;

    public Result(boolean success, String message) {
        super();
        this.success = success;
        this.message = message;
    }

    public Result(boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}