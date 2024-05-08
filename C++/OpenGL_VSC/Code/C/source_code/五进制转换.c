#include<stdio.h>
#include<limits.h>
int main()
{   
    int i;
    int g;
    int s;
    int I[20];
    printf("请输入一个十进制数：");
    while (scanf("%d",&i) == 1)
    {
        for (s = 1 ; i != 0; s++)
            {
                g = i % 5;
                I[s] = g;
                i = i / 5;
            }           
        while (s-- != 1)
            {
            
                printf("%d",I[s]);
            }
        printf("\n");
    }      
}