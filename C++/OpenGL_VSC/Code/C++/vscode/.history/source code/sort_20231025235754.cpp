#include <iostream>
#include <array>
#include <vector>

int main(){
    using namespace std;

    vector <int> array; 
    //基于verctor的冒泡排序
    for (int i = 0; i < 10; i++){
        array.push_back(i);
    }
    for (int i = 0; i < 10; i++){
        cout << array[i] << " ";
    }
    cout << endl;


}