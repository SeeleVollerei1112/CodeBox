#include<stdio.h>
float func(float x, float y);
int main()
{
    float f1;
    float f2;
    float fg;

    printf("请输入两个浮点数：");
    while(scanf("%f %f", &f1, &f2) == 2)
    {
        fg = func(f1 , f2);
        printf("结果为：%f\n" , fg);
        printf("请输入两个数:");
    }

    return 0;
}
float func(float x, float y)
{
    float f1 = x;
    float f2 = y;
    float fl;

    fl = (f1 - f2)/(f1 * f2);

    return fl;
}