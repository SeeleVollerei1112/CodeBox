package org.seelevollerei.data_visualization.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@Service
public class StockDataService {

    @Autowired
    private WebClient webClient;

    private RestClient restClient;

    public Mono<String> fetchStockData(String stockCode) {
        return webClient.get()
                // .uri("http://localhost:5000/process_data/{stockCode}", stockCode)
                .uri("http://localhost:5000/api/stocks/<stock_code>/reports", stockCode)
                .retrieve()
                .bodyToMono(String.class);
    }
}