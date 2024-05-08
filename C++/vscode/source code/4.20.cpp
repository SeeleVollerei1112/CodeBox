#include <cstring>
#include <iostream>

int main()
{
    using namespace std;
    char animal[20] = "bear";
    const char *bird = "wren";
    char *ps;
    cout << animal << " " << bird << endl;

    cout << "Enter a kind of animal: ";
    cin >> animal;
    cout << animal << " at " << (int *)animal << endl;
    ps = animal;
    cout << ps << "at  " << (int *)ps << endl;

    ps = new char[strlen(animal) + 1];
    strcpy(ps, animal);
    cout << ps << " at " << (int *)ps << endl;
    delete[] ps;

    return 0;
}