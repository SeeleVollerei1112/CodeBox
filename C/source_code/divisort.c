#include<stdio.h>
#include<stdbool.h>
int main(viod)
{
    unsigned long num;
    unsigned long div;
    bool isprime;

    printf("Please enter an intger for analysis: ");
    printf("Enter q to quit.\n");
    while (scanf("%lu", &num) == 1)
    {
        for(div = 2 , isprime = true; (div * div) <= num ; div++)
        {
            if (num % div == 0)
            {
                if((div * div) != num)
                    printf("%lu is divisiable by %lu and %lu.\n",
                            num , div ,num /div);
                else
                    printf("%lu is divisiable by %lu.\n"
                            ,num , div);
                            isprime = false;
            }
            
        }
        if(isprime)
            printf("%lu is prime.\n", num);
        printf("Please enter another intger for analysis: ");
        printf("Enter q to quit.\n");
    }
    printf("Bye.\n");

    return 0;
}