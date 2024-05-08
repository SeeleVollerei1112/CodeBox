#include<stdio.h>
int main()
{
    int num = 5;
    int n = 3;
    int y;
    while(num < 21)
        {
            printf("%10d %10d\n", num , num * num++);
        }
    y = n++ + n++;
    printf("%d %d", y, n);
}
