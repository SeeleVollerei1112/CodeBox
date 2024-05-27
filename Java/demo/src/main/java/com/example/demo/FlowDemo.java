package com.example.demo;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Flow;
import java.util.concurrent.Flow.Subscription;
import java.util.concurrent.SubmissionPublisher;

public class FlowDemo {
    public static void main(String[] args) {
        CountDownLatch latch = new CountDownLatch(5);

        try (SubmissionPublisher<String> publisher = new SubmissionPublisher<>()) {
            Flow.Subscriber<String> Subscriber = new Flow.Subscriber<String>() {
                private Subscription subscription;

                @Override
                public void onSubscribe(Subscription subscription) {
                    this.subscription = subscription;
                    System.out.println(Thread.currentThread() + "Subscribed..." + subscription);
                    subscription.request(1);
                }

                @Override
                public void onNext(String item) {
                    System.out.println(Thread.currentThread() + "Received: " + item);
                    subscription.request(1);
                    latch.countDown();
                }

                @Override
                public void onError(Throwable throwable) {
                    System.out.println(Thread.currentThread() + "Error: " + throwable);
                }

                @Override
                public void onComplete() {
                    System.out.println("Done");
                }

            };

            Myprocessor processor = new Myprocessor();
            publisher.subscribe(processor);

            processor.subscribe(Subscriber);

            // publisher.subscribe(Subscriber);

            for (int i : new int[] { 1, 2, 3, 4, 5 }) {
                publisher.submit("item " + i);
            }

            try {
                latch.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    };

    static class Myprocessor extends SubmissionPublisher<String> implements Flow.Processor<String, String> {
        private Subscription subscription;

        @Override
        public void onSubscribe(Subscription subscription) {
            System.out.println("Processor bind...");
            this.subscription = subscription;
            subscription.request(1);
        }

        @Override
        public void onNext(String item) {
            System.out.println(Thread.currentThread() + "Processor received: " + item);
            item = Thread.currentThread() + "Processed " + item;
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            submit(item);
            subscription.request(1);
        }

        @Override
        public void onError(Throwable throwable) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'onError'");
        }

        @Override
        public void onComplete() {
            System.out.println("Processor done...");
            close();
        }
    }
}
