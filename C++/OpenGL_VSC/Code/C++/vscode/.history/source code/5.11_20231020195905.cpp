#include <iostream>
#include <cstring>

int main()
{
    using namespace std;
    char word[5] = "?ate";
    char ch;
    
    for(ch = 'a'; strcmp(word, "mate"); ch++)
    {
        word[0] = ch;
        cout << word << endl;
    }
    cout << "afet loop end, word is " << word << endl;
    cout << "ch = " << ch << endl;
    return 0;
}