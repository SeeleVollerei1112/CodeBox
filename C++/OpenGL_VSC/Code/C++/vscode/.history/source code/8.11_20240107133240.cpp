#include <iostream>

int main()
{
    using namespace std;
    int i = 10;
    int j = 20;
    cout << "i, j = " << i << ", " << j << ";\n";
    cout << "using complier-generated int swapper: \n";
    Swap(i, j);

    return 0;
}

template <typename T> void Swap(T &a, T &b)
{
    T temp;
    temp = a;
    a = b;
    b = temp;
}
