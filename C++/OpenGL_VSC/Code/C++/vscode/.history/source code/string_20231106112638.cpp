#include <iostream>
#include <string>
#include <algorithm>

using namespace std;
int main(){
    //数字转字符串
    int num;
    cin>>num;
    string str=to_string(num);
    cout<<str<<endl;
    //使用库函数反转字符串
    reverse(str.begin(),str.end());
    cout<<str<<endl;
}