#include<stdio.h>
#include<limits.h>
#include<float.h>
#include<stddef.h>
#include<inttypes.h>
#include<stdint.h>
#define PI 3.14;
int main(viod)
{   
    printf("%zd\n",CHAR_BIT);
    printf("%zd\n",INT_MAX);
    printf("%zd\n",LLONG_MAX);
    printf("%zd\n",ULLONG_MAX);       /*出大问题*/            
    printf("%zd\n",UCHAR_MAX);
    printf("%zd\n",9223372036854775807 * 2ULL + 1ULL);     /*同上*/
    printf("%zd\n",FLT_MANT_DIG);           /*在内存中尾数位数*/
    printf("%zd\n",FLT_DIG);                /*精度，即最小有效数字位数*/
    printf("%zd\n",DBL_MANT_DIG);
    printf("%zd\n",DBL_DIG);
    printf("%zd\n",LDBL_MANT_DIG);
    printf("%zd\n",LDBL_DIG);
    printf("%zd\n",DBL_MAX_10_EXP);      /*float类型的最大正指数*/
    printf("%d\n", DBL_MIN_10_EXP);      /*带有全部有效数字的float类型的最小负指数*/ 
    printf("%e\n",FLT_MAX);
    printf("%lf\n%f\n%e ",1.797693e+308 ,1.797693e+308 ,1.797693e+308);

    return 0;     
}  