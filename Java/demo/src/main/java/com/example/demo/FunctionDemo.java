package com.example.demo;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class FunctionDemo {
    public static void main(String[] args) {

        Supplier<String> supplierString = () -> "Hello";
        Supplier<String> supplierNumber = () -> "123";

        Predicate<Supplier<String>> isString = (Supplier<String> s) -> s.get().equals("Hello");

        Predicate<Supplier<String>> isNumber = (Supplier<String> s) -> s.get().matches("\\d+");

        Function<String, Integer> stingConvertToInteger = Integer::parseInt;

        // 消费者，负责打印
        Consumer<String> print = System.out::println;

        print.accept(supplierString.get());
        print.accept(isString.test(supplierString) ? "It's a string" : "It's not a string");

        print.accept(isNumber.test(supplierNumber) ? "It's a number" : "It's not a number");

    }

}
