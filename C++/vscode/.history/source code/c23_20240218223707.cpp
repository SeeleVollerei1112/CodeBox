#include <iostream>
#include <string>
#include <vector>

struct Demo
{
    std::string data;

    // Deducing this with a const qualifier
    bool contains_data(this const Demo &self, const std::string &substr) const
    {
        return self.data.contains(substr);
    }
};

int main()
{
    // Using the new z literal for size_t
    std::size_t size = 10z;

    std::vector<int> vec(size, 1); // Initialize vector with 10 elements of value 1
    for (auto &v : vec)
    {
        std::cout << v << " ";
    }
    std::cout << "\n";

    Demo demo{"Hello C++23"};
    if (demo.contains_data("C++23"))
    {
        std::cout << "Demo string contains 'C++23'\n";
    }
    else
    {
        std::cout << "Demo string does not contain 'C++23'\n";
    }

    return 0;
}
