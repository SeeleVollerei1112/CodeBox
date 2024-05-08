#include <iostream>
#include <string>
#include <algorithm>

int main(){
    int num;
    std::cin>>num;
    //to_string()函数将数字转换为字符串
    std::string str = std::to_string(num);
    std::cout<<str<<std::endl;

    //reverse()函数将字符串反转
    std::reverse(str.begin(), str.end());
    std::cout<<str<<std::endl;

    return 0;
}
