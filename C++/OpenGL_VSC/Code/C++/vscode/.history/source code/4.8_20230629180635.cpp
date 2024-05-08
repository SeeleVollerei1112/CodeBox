#include <iostream>
#include <string>

int mian()
{
    using namespace std;
    string str1 = "penguin";
    string str2, str3;

    cout << "you can assign one string object to another: str2 = str1\n";
    str2 = str1;
    cout << "str1" << str1 << ", str2" << str2 << endl;
    cout << "you can assign a C-style string to a string object.\n";


    return 0;
}