#include <iostream>
#include <fstream>
int main(){
    
    using namespace std;

    char automobile[50];
    int year;
    double a_price;
    double d_price;
 
    ofstream fout;
    fout.open("Tips/carinfo.txt");

    cout << "Enter the make and model of automobile: ";
    cin.getline(automobile, 50);
    cout << "Enter the model year: ";
    cin >> year;
    cout << "Enter the oraginal asking price: ";
    cin >> a_price;
    d_price = 0.913 * a_price;

    fout << fixed;
    fout.precision(2);
    fout.setf(ios_base::showpoint);
    fout << "Make and model: " << year << endl;
    fout << "was asking $" << a_price << endl;
    fout << "Now asking $" << d_price << endl;

    return 0;
}