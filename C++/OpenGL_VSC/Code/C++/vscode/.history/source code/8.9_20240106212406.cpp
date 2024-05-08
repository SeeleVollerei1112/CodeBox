#include <iostream>
const int ArSize = 80;
char *left(const char *str, int n = 1);
int main()
{
    using namespace std;

    char sample[ArSize];
    cout << "Enter a String: \n";
    cin.get(sample, ArSize).get();

    char *ps = left(sample, 4);
    cout << ps << endl;
    delete[] ps;

    ps = left(sample);
    cout << ps << endl;
    delete[] ps;

    return 0;
}

char *left(const char *str, int n)
{
    if (n < 0)
        n = 0;
    int m = 0;
    while (m <= n && str[m])
        m++;
    char *p = new char[m + 1];
    int i;
    for (i = 0; i < n && str[i]; i++)
    {
        p[i] = str[i];
    }
    while (i <= n)
    {
        p[i++] = '\0';
    }

    return p;
}

unsigned long left(unsigned long num, unsigned ct)
{
    unsigned digits = 1;
    unsigned long n = num;
    if (ct == 0 || num == 0)
    {
        return 0;
    }
    while (n / 10)
        digits++;
    if (digits > ct)
    {
        ct = digits - ct;
        while (ct--)
            num /= 10;
        return num;
    }
    else
    {
        return num;
    }
}