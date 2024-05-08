#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int count_primes(int n) {
    bool *is_prime = (bool*)malloc((n + 1) * sizeof(bool));
    for (int i = 2; i <= n; i++) {
        is_prime[i] = true;
    }
    int count = 0;
    for (int i = 2; i <= n; i++) {
        if (is_prime[i]) {
            count++;
            for (int j = i * i; j <= n; j += i) {
                is_prime[j] = false;
            }
        }
    }
    free(is_prime);
    return count;
}

int main() {
    int n = 100;
    printf("有%d个小于或等于%d的素数\n", count_primes(n), n);
    return 0;
}