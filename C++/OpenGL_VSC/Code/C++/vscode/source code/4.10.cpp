#include <cstring>
#include <iostream>
#include <string>

int main()
{
    using namespace std;

    char charr[20];
    string str;
    cout << "Length of string in charr before input:" << strlen(charr) << endl;
    cout << "Length of string in charr before input:" << str.size() << endl;
    cin.getline(charr, 21);
    cout << "You entered:" << charr << endl;
    cout << "Enter a line of text:\n";
    getline(cin, str);
    cout << "You entered: " << str << endl;

    system("pause");
    return 0;
}