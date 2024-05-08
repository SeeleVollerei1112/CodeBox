#include <iostream>
template <typename T> void Swap(T &a, T &b);
struct job
{
    char name[40];
    double salary;
    int floor;
};
void Show(job &j);
int main()
{
    using namespace std;
    cout.precision(2);
    cout.setf(ios::fixed, ios::floatfield);
    int i = 10;
    int j = 20;
    cout << "i , j = " << i << ", " << j << ";\n";
    cout << "Using compiler-generated int swapper:\n";
    Swap(i, j);
    cout << "Now i , j = " << i << ", " << j << ".\n";

    job sue = {"Susan Yaffe", 73000.60, 7};
    job sidney = {"Sidney Taffee", 78060.72, 9};
    Show(sue);
    Show(sidney);
}

template <typename T> void Swap(T &a, T &b)
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}

void Show(job &j)
{
    using namespace std;
    cout << j.name << ": $" << j.salary << " on floor " << j.floor << endl;
}