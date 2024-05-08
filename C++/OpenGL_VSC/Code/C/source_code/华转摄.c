#include<stdio.h>
int main(void)
{
    float C;
    float f;
    printf("请输入需要转换的华氏度:\n");  
    scanf("%5f°",&f);
    C = 5.0/9.0 * (f-32.0);
    printf("转换后的摄氏度；%f",C);

    return 0;
    
}