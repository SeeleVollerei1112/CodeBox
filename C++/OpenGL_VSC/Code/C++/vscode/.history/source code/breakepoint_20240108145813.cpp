#include <iostream>
#include <vector>

int sum(const std::vector<int> &numbers)
{
    int total = 0;
    for (int num : numbers)
    {
        total += num;
        // 断点 1: 检查每次迭代的总和
    }
    return total;
}

int main()
{
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    // 断点 2: 检查数组内容
    int total = sum(numbers);
    // 断点 3: 检查总和计算的结果
    std::cout << "The total sum is: " << total << std::endl;

    system("pause");
    return 0;
}
