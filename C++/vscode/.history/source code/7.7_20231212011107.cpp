#include <iostream>
int fill_array(double *arr, int limit);
void revalue(double r, double ar[], int n);
void show_array(const double *ar, int n);
using namespace std;
const int MAX = 5;
int main()
{
    double properties[MAX];
    int size = fill_array(properties, MAX);
    show_array(properties, size);
    if (size > 0)
    {
        cout << "Enter revaluation factor: ";
        double factor;
        while (!(cin >> factor))
        {
            cin.clear();
            while (cin.get() != '\n')
                continue;
            cout << "Bad input;pls enter a number: ";
        }
        revalue(factor, properties, size);
    }
    show_array(properties, size);
    return 0;
}

int fill_array(double *arr, int limit)
{
    double temp;
    int i;
    for (i = 0; i < limit; i++)
    {
        cout << "Enter value #" << (i + 1) << ": ";
        cin >> temp;
        if (!cin)
        {
            cin.clear();
            while (cin.get() != '\n')
                continue;
            cout << "Bad input; input process terminated.\n";
        }
        else if (temp < 0)
            break;
        arr[i] = temp;
    }
    return i;
}

void show_array(const double *ar, int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << "Property #" << (i + 1) << ": $";
        cout << ar[i] << endl;
    }
}

void revalue(double r, double ar[], int n)
{
    for (int i = 0; i < n; i++)
        ar[i] *= r;
}