#include<stdio.h>
int main(void)
{
    const float MIN = 0.0f;
    const float MAX = 1000.0f;
     
     float score;
     float total;
     int n = 0;
     float min = MAX;
     float max = MIN;

     printf("Enter the first score (q to quit): ");
     while (scanf("%f", &score) == 1)
     {
        if (score < MIN || score > MAX)
            {
                    printf("%f is an invalid value. Try again: ", score);
                    continue;  
            }
        printf("Accpeting %0.1f:\n", score);
        min = (score < min) ? score : min;
        max = (score > max) ? score : max;
        total  += score;
        n++;
        printf("Enter next score (q to quit): ");
     }
     if (n > 0)
     {
        printf("Average of %d scores is %0.1f.\n", n , total / n);
        printf("Low = %0.1f, high = %0.1f\n", min , max);
     }
     else
        printf("No valid score were entered.\n");
     
     return 0;
}