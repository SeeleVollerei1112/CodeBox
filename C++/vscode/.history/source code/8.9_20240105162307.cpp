#include <iostream>
const int ArSize = 80;
int main()
{
    using namespace std;

    char sample[ArSize];
    cout << "Enter a String: \n";
    cin.get(sample, ArSize).get();
    char *ps = left(sample, 4);

    return 0;
}
left(char *str)