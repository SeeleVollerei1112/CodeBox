#include <iostream>
#include <string>

int main()
{
    using namespace std;
    cout << "Enter a word: ";
    string word;
    cin >> word;
    int i, j;
    char temp;
    for (i = 0, j = word.size() - 1; i < j; ++i, --j)
    {
        temp = word[i];
        word[i] = word[j];
        word[j] = temp;
    }
    cout << temp << endl;
    cout << word << endl;
}