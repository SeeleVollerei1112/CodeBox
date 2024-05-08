#include <fstream>
#include <iostream>
const int SIZE = 60;
int main()
{

    using namespace std;
    char filename[SIZE];
    ifstream fin;
    cout << "Enter name of data file: ";
    cin.getline(filename, SIZE);
    fin.open(filename);
    if (!fin.is_open())
    {
        cout << "Could not open the file " << filename << endl;
        cout << "Program terminating.\n";
        exit(EXIT_FAILURE);
    }
    double value;
    double sum = 0.0;
    int count = 0;

    fin >> value;
    while (fin.good())
    {
        ++count;
        sum += value;
        fin >> value;
    }
    if (fin.eof())
        cout << "End of file reached.\n";
    else if (fin.fail())
        cout << "input terminated by data mismatch.\n";
    else
        cout << "Input terminated for unknown reason.\n";
    if (count == 0)
        cout << "No data processed.\n";
    else
    {
        cout << "Items read: " << count << endl;
        cout << "Sum: " << sum << endl;
        cout << "Average: " << sum / count << endl;
    }
    fin.close();

    return 0;
}