#include <cstring>
#include <iostream>
#include <string>

int main()
{
    using namespace std;
    char charr1[20];
    char charr2[20] = "jaguar";
    string str1;
    string str2 = "panther";
    str1 = str2;

    strcpy(charr1, charr2);
    // 会将charr1的值清空再赋值

    // cout << charr1 << endl;
    str1 += " paste";

    // strcat(charr1, " juice");
    // //字符串数组的拼接
    // //也同样适用于string对象
    // cout << str1 << " " << charr1 << endl;

    strcat(charr1, charr2);
    // 字符串数组的拼接
    // 也同样适用于string对象
    cout << charr1 << endl;

    int len1 = str1.size();
    // int len1 = str1.length();

    int len2 = strlen(charr1);

    cout << "The string " << str1 << " contains " << len1 << " characters.\n";
    cout << "The string " << charr1 << " contains " << len2 << " characters.\n";

    // strncat();
    // strncpy();
    system("pause");
    return 0;
}
// java中的类与引用的对象的关系