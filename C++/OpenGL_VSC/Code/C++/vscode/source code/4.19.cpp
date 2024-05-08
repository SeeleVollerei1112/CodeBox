#include <iostream>

int main()
{
    using namespace std;
    double wages[3] = {1000.0, 2000.0, 3000.0};
    short stacks[3] = {3, 2, 1};

    double *pw = wages;
    cout << "pw = " << pw << ", *pw = " << *pw << endl;
    // cout << "wages = " << wages << ", *wages =  " << *wages << endl;
    pw = pw + 1;
    cout << "pw = " << pw << ", *pw = " << *pw << endl;

    short *ps = &stacks[0];
    cout << "ps = " << ps << ", *ps = " << *ps << endl;
    ps = ps + 1;
    cout << "ps = " << ps << ", *ps = " << *ps << endl;

    cout << "stacks[0] = " << stacks[0] << " "
         << "stacks[1] = " << stacks[1] << endl;
    cout << "stacks = " << stacks << endl;
    cout << "*stacks + 1 = " << *stacks + 1 << endl;
    cout << "*(stacks + 1) = " << *(stacks + 1) << endl;

    cout << sizeof(wages) << " = size of wages array" << endl;
    cout << sizeof(pw) << " = size of pw pointer" << endl;

    cout << wages << " = wages" << endl;
    //
    cout << *wages << " = *wages" << endl;
    cout << &wages << " = &wages" << endl;
    // 数组名是数组的地址，而数组的地址是数组的第一个元素的地址
    return 0;
}