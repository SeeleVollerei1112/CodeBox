#include<stdio.h>
int sqrt10(int n);
int main()
{
    int i1 ,i2;
    int s1 ,s2;
    int j, j2 , sum;
    int s , k , g = 0;
    int i = 0 , w, l;
    int count = 0;
    int r[100];
    scanf("%d", &i1); 
    scanf("%d\n", &i2);
    scanf("%d\n", &s1);
    scanf("%d", &s2);
    j = (s1 >= s2) ? s1 : s2;
    j2 =(s1 >= s2) ? s2 : s1;
    while(count <= j+1)       
    {
        if (count <= j2)
        {
            s = s1 % sqrt10(count+1);
            k = s2 % sqrt10(count+1);
            sum = s + k + i;
            w = sum % (count + 2);
            i = sum / (count + 2);
        }
        else
        {                               
            s = s1 % sqrt10(count+1);
            sum = s + i;
            w = sum % (count + 2);
            i = sum / (count + 2);
        }
        r[count] = w;
        count++;    
    }
    while(g < j)
        {
        printf("%d",r[g]);
        g++;
        }
}
int sqrt10(int n)
{
    int i = 10;
    while(n)
    {
        i *= i;
        n--;   
    }

    return i;
}