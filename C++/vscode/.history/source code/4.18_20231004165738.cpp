#include <iostream>
int main()
{
    using namespace std;

    int *ptr = new int;
    *ptr = 1001;

    cout << "*ptr = " << *ptr << endl;
    cout << "ptr = " << ptr << endl;

    cout << "sizeof *ptr =" << sizeof *ptr << endl;
    cout << "sizeof ptr =" << sizeof ptr << endl;

    delete ptr;
    
    system("pause");
}