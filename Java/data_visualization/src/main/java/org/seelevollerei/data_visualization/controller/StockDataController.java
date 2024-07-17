package org.seelevollerei.data_visualization.controller;

import org.seelevollerei.data_visualization.service.StockDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class StockDataController {

    @Autowired
    private StockDataService stockDataService;

    @GetMapping("/getStockData")
    public Mono<String> getStockData(@RequestParam String stockCode) {
        return stockDataService.fetchStockData(stockCode);
    }
}
