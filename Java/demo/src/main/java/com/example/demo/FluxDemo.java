package com.example.demo;

import reactor.core.publisher.Flux;

public class FluxDemo {
    public static void main(String[] args) {
        Flux<Object> flux = Flux.generate(
                () -> 0,
                (state, sink) -> {
                    sink.next(state);
                    return state + 1;
                });
        flux.subscribe();
    }

}
