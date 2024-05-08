#include<stdio.h>
int main(viod)
{
    int ch;
    while((ch = getchar()) != EOF)    //ctrl+z为EOF
        putchar(ch);   
    return 0;
}