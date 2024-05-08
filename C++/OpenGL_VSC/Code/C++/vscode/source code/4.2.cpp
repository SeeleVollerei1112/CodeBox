#include <cstring>
#include <iostream>

int main()
{
    using namespace std;

    char name1[15];
    char name2[15] = "C++owboy";

    cout << "Howdy! I'm " << name2;
    cout << " what's your name ?\n";
    cin >> name1;
    cout << "well." << name1 << ", your name has ";
    cout << strlen(name1) << " letters and is stored\n";
    cout << "in an array of " << sizeof(name1) << " bytes.\n";
    cout << "your initial is " << name1[0] << ".\n";
    name2[3] = '\0';
    cout << "Here are the first 3 chararcters of my name: ";
    cout << name2 << endl;

    system("pause");
    return 0;
}