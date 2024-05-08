#include <iostream>
#include <vector>

std::vector <int> sieveOfEratosthenes(int n){
    std::vector <bool> isPrime(n + 1, true);
    std::vector <int> primes;

    for (int p = 2; p * p <= n; p++){
        if (isPrime[p] = true){
            for (int i = p * p; i <= n; i += p){
                isPrime[i] = false;
            }
        }
        
        for (int p = 2; p <= n; p++){
            if (isPrime[p])
                primes.push_back(p);
        }

        return primes;
    }
} 

int main(){
    int n;
    std::cout << "Enter the upper limit: ";
    std::cin >> n;

    std::vector <int> primes = sieveOfEratosthenes(n);
    for (int prime : primes){
        std::cout << prime << " ";
    }

    return 0;
}