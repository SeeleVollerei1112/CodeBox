#include <cstring>
#include <iostream>
int main()
{
    using namespace std;
    const int Arsize = 20;
    char name[Arsize];
    char dessert[Arsize];
    cout << "Enter your name:\n";
    cin >> name;
    cout << "Enter yout favorite dessert:\n";
    cin >> dessert;
    cout << "I have so me dessert " << dessert;
    cout << " for you, " << name << ".\n";

    system("pause");
    return 0;
}