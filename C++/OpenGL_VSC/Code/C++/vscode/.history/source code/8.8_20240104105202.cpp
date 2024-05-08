#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;
const int LIMIT = 5;
const char *fn = "Tips/ep-data.txt";
void file_it(ostream &os, double fo, const double *fe, int n);
int main()
{
    ofstream fout;
    fout.open(fn);
    if (!fout.is_open())
    {
        cout << "Can't open " << fn << ". Bye.\n";
        exit(EXIT_FAILURE);
    }
    double objective;
    cout << "Enter the focal length of your telescope objective in mm ";
    cin >> objective;
    double eps[LIMIT];
    cout << "Enter the focal length of eyepieces in mm:\n";
    for (int i = 0; i < LIMIT; i++)
    {
        cout << "Eyepiece #" << i + 1 << ": ";
        cin >> eps[i];
    }
    file_it(cout, objective, eps, LIMIT);
    file_it(fout, objective, eps, LIMIT);

    return 0;
}

void file_it(ostream &os, double fo, const double *fe, int n)
{
    os << "Focal length of objective: " << fo << " mm\n";
    os << "f.l. eyepiece"
       << "   "
       << "maginfication" << endl;
    for (int i = 0; i < n; i++)
    {
        os << fe[i] << "\t\t";
        os << int(fo / fe[i] + 0.5) << endl;
    }
}