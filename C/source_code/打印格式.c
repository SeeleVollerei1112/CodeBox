#include<stdio.h>
int main()
{
    printf("*     %d*\n",5);     /*%d只占一位*/
    printf("*%6d*\n",5);
    printf("*%06d*\n",5);
    printf("*%-6d*\n",5);
    printf("*%.6d*\n",51234567);   
    printf("*%.6d*\n",5);           //同6d
    printf("*%6.2f*\n",6.1456232);  /*小数点算一位*/
    printf("*%#o*\n",8);
    printf("*%6g*\n",1.0000000000);
    printf("*%6g*\n",0.0001);
    printf("*%.6g*\n",1.23456789);     //为最大有效数字
    printf("*%6g*\n",1234567.0);    
    printf("%f\n%lf\n",1.16165161616141 ,1.16165161616141);    /*默认精度为6（传参时浮点型都转化为double）*/
    printf("*%#g*\n",1.00);     /*显示小数点后五位*/
    printf("*%6g*\n",1.00);
    printf("*%#e  %#lf*\n",1.000e10 ,1.);   /*显示小数点后六位*/
    printf("*%.6d*\n",(int)3.54554545);
    printf("%2.2s\n","wdiadwdad");
    printf("%.0f\n",1.155165);
    printf("%f\n",1.12);
    printf("%g %g",1132315.6 ,0.0000044545454);   //指数小于-4或大于等于精度时

    
    return 0;
}