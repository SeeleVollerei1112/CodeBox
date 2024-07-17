package com.example.demo;

import java.util.Objects;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class DemoApplication {

	public static void main(String[] args) {
		// 有入参，无出参(消费者)
		BiConsumer<String, Integer> print = (x, y) -> System.out.println(x + y);
		print.accept("Hello ", 5);

		// 有入参，有出参(转换器)
		Function<String, Integer> stingConvertToInteger = Integer::parseInt;
		System.out.println(stingConvertToInteger.apply("123"));

		// 断言
		Predicate<String> predicate = Objects::nonNull;
		System.out.println(predicate.test("Hello"));

		// 无入参，有出参(生产者)
		Supplier<String> supplier = () -> "Hello";
		System.out.println(supplier.get());

		// 无入参，无出参()
		Runnable runnable = () -> System.out.println("Hello there!");
		runnable.run();

	}
}
