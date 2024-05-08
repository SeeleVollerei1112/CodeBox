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

    int a = 10;
    int b = 20;
    int c;
    std::tuple addab = [&a,&b,&c]() { return a=a+1, b=b+1, c=a+b; };
    cout << a << " " << b << " " << c;
    

}