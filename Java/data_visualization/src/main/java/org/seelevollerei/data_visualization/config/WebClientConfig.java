package org.seelevollerei.data_visualization.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

        @Bean
        WebClient webClient() {
                return WebClient.builder()
                                .exchangeStrategies(ExchangeStrategies.builder()
                                                .codecs(codecs -> codecs.defaultCodecs()
                                                                .maxInMemorySize(16 * 1024 * 1024))
                                                .build())
                                .build();
        }
}
