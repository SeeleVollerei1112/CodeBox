#include <iostream>
#include <array>
#include <vector>
#include <tuple>

int main(){
    using namespace std;

    // vector <int> array; 
    // auto sayhello = [](){ cout << "Hello, World!" << endl;};
    // sayhello();

    // auto add = [](int a, int b) -> int {return a + b ; };

    // int x = 10;
    // auto addX = [x](int a){ return a + x; };

    // int y = 20;
    // auto modifyY = [&y](int value){ y += value; };
    // modifyY(10);
    // cout << y;

    // int a = 10;
    // int b = 20;
    // int c;
    // auto addab = [&a,&b,&c]() -> std::tuple<int, int, int> {
    //     return {a += 1, b += 1, c = a + b};
    // };
    // addab();
    // cout << a << " " << b << " " << c;
    
        std::vector<int> vec = {4, 2, 5, 1, 3};

        // 短冒泡排序的 lambda 表达式
        auto bubbleSort = [](std::vector<int>& arr) {
            bool swapped;
            for (size_t i = 0; i < arr.size(); ++i) {
                swapped = false;
                for (size_t j = 0; j < arr.size() - i - 1; ++j) {
                    if (arr[j] > arr[j + 1]) {
                        std::swap(arr[j], arr[j + 1]);
                        swapped = true;
                    }
                }
                // 如果在这一轮中没有交换，则数组已经是有序的，可以提前退出
                if (!swapped) {
                    break;
                }
            }
        };

        bubbleSort(vec);

        // 打印排序后的vector
        for (int num : vec) {
            std::cout << num << " ";
        }

        return 0;
    

}