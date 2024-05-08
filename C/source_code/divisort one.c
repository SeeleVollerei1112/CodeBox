#include<stdio.h>
#include<stdbool.h>
int main()
{
    int num;
    bool isprime;
    int i , j;
    printf("输入数字:\n");
    while (scanf("%d", &num) == 1)
    {
        for(i = 2, isprime = true; i < num; i++)
        {
            if(num % i == 0)
            {
                printf("%d不为素数", num);
                isprime = false;
                break;
            }
        }
        if(isprime)
            printf("%d为素数", num);
    }  

    return 0; 
}