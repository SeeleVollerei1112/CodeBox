#include <iostream>
#include <cmath>
#include <vector>

bool isPrime(int n) {
    if (n <= 1) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    for (int i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

std::vector<int> findDivisors(int n) {
    std::vector<int> divisors;
    for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) {
            divisors.push_back(i);  // 添加小的约数
            if (i != n / i) {       // 如果不是平方根，添加大的约数
                divisors.push_back(n / i);
            }
        }
    }
    return divisors;
}

int main() {
    int num;
    std::cout << "请输入一个整数：";
    std::cin >> num;

    if (isPrime(num)) {
        std::cout << num << " 是素数。" << std::endl;
    } else {
        std::cout << num << " 是合数，它的约数有：";
        std::vector<int> divisors = findDivisors(num);
        for (int divisor : divisors) {
            std::cout << divisor << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
