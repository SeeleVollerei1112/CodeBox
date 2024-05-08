#include<iostream>   
#include<cctype>
int main(){
    
    char word1, word2;
    std::cout << "Enter two words: ";
    std::cin >> word1 >> word2;
    std::cout << "The first word is " << word1 << std::endl;
    std::cout << "The second word is " << word2 << std::endl;

    return 0;
}