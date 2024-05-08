#include<stdio.h>
int main()
{
int a = 1;
int b = a++;
int c = ++a;
int d = a++ + ++a;
printf("%d",d);
}