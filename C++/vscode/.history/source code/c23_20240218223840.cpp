#include <concepts>
#include <iostream>
#include <ranges>
#include <vector>

// A simple concept that checks for arithmetic types
template <typename T>
concept Arithmetic = std::is_arithmetic_v<T>;

// Function that utilizes the concept to ensure it only accepts arithmetic types
template <Arithmetic T> T add(T a, T b)
{
    return a + b;
}

int main()
{
    // Using constexpr with a lambda
    constexpr auto squared = [](int x) constexpr { return x * x; };
    std::cout << "Squared of 5 is " << squared(5) << std::endl;

    // Using concepts
    std::cout << "Addition of 5 and 3 is " << add(5, 3) << std::endl;

    // Using ranges to filter and transform a collection
    std::vector<int> nums{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    auto even_squares = nums | std::views::filter([](int n) { return n % 2 == 0; }) | std::views::transform(squared);

    std::cout << "Squares of even numbers: ";
    for (int n : even_squares)
    {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    return 0;
}
