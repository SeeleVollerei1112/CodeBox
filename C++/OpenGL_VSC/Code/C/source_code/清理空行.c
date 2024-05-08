#include<stdio.h>
#include<ctype.h>
int main()
{
    char ch;
    while((ch = getchar()) == ' ')
        continue;
    while(getchar() != '\n')
        continue;
    printf("%c", ch);

    return 0;
}