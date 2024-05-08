#include<stdio.h>
int main()
{
    int count = 0;
    char ch;

    for(count = 0; count < 10;count++ ,printf("ok\n") )
    {
        ch = getchar();
        if (ch == '\n')
            continue;
        putchar(ch);

    }
    return 0;
}