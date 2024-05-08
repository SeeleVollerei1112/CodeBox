#include <iostream>
#include <cstring>

int main()
{   
    using namespace std;

    char *name;

    name = getname();
    cout << name << " at " << (int*) name << endl;
    delete [] name;

    name = getname();
    cout << name << " at " << (int*) name << endl;
    delete [] name;

    system("pause");
    return 0;
}

char * getname()
{
    char temp[80];
    cout << "Enter last name:";
    cin >> temp;
    char * pn = new char[strlen(temp) + 1];
    strcpy(pn, temp);

    return pn;
}