#include <ctime>
#include <iostream>
#define number int

int main()
{
    using namespace std;

    typedef long big_number;
    float secs;
    clock_t delay;
    cout << "Enter the delay tiA:A:A:A:me, in seconds: ";
    cin >> secs;
    delay = secs * CLOCKS_PER_SEC;
    cout << "starting\a\n";
    clock_t start = clock();
    while (clock() - start < delay)
        ; // wait until time elapses
    cout << "done \a\n";
}