package com.gy.cbl.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 分页结果的实体类
 */
@Data
public class PageResult<T> implements Serializable {
    // 总数
    private long total;
    // 返回的数据集合
    private List<T> rows;

    public PageResult(long total, List<T> rows) {
        super();
        this.total = total;
        this.rows = rows;
    }
}

