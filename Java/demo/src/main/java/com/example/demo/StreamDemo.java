package com.example.demo;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class StreamDemo {
        public static void main(String[] args) {
                // List<Integer> listIntegers = List.of(1, 3, 5, 1, 3, 5, 0, 22, 49, 11);

                // int max = 0;
                // for (Integer i : listIntegers) {
                // if (i % 2 == 2) {
                // // max = i > max ? i : max;
                // max = Math.max(i, max);
                // }
                // }
                // System.out.println(max);

                // 流，惰性求值，遇到终端操作才会执行
                // listIntegers.stream()
                // .filter(i -> i % 2 == 0)
                // .max(Integer::compareTo)
                // .ifPresent(System.out::println);

                // List<Integer> listIntegers = new ArrayList<>();
                // List<Integer> listIntegers = Collections.synchronizedList(new ArrayList<>());
                // Stream.of(1, 3, 5, 1, 3, 5, 0, 22, 49, 11)
                // .parallel()
                // .filter(i -> {
                // listIntegers.add(i);
                // // System.out.println("filter线程:" + Thread.currentThread().getName());
                // // System.out.println("filter: " + i);
                // return i % 2 == 1;
                // })
                // .max(Integer::compareTo)
                // .ifPresent(System.out::println);

                // listIntegers.stream()
                // .parallel()
                // .sorted()
                // .distinct()
                // .forEach(System.out::println);

                @Data
                @NoArgsConstructor
                @AllArgsConstructor
                class Person {
                        private String name;
                        private String gender;
                        private int age;
                }

                List<Person> persons = List.of(
                                new Person("张三", "男", 18),
                                new Person("李四", "男", 20),
                                new Person("王五", "女", 22),
                                new Person("赵六", "女", 24),
                                new Person("孙七", "男", 26));

                persons.stream()
                                .filter(person -> person.age > 20)
                                .limit(2)
                                .peek(System.out::println)
                                .map(Person::getName)
                                // 实现使用flatmap正则拆分姓和名
                                .flatMap(name -> Stream.of(name.split("")))
                                .sorted()
                                .forEach(System.out::println);

                System.out.println("====================================");

                persons.stream()
                                .peek(System.out::println)
                                .filter(person -> person.age > 20)
                                .map(Person::getName)
                                .map(name -> name.split(""))
                                .map(arr -> arr[0])
                                .forEach(System.out::println);

                System.out.println("====================================");

                List<Integer> collect = Stream.of(1, 2, 3, 4, 5)
                                .takeWhile(i -> i < 4)
                                .collect(Collectors.toList());

                System.out.println(collect);
                System.out.println("====================================");

                Map<String, List<Person>> collect2 = persons.stream()
                                .filter(person -> person.age > 20)
                                .collect(Collectors.groupingBy(Person::getGender));

                System.out.println(collect2);
                System.out.println("====================================");

                Map<String, Long> collect3 = persons.stream()
                                .collect(Collectors.groupingBy(Person::getGender, Collectors.counting()));

                System.out.println(collect3);
        }
}
