#include<stdio.h>
int main()
{
    typedef int z;
    z a = 1;
    z b = 4;
    a = a + b;
    b = a - b;
    a = a - b;
    printf("a=%d b=%d", a, b);
    

    return 0;
}