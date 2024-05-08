#include<stdio.h>
int main()
{
    int i;
    char o;
    char h[10];
    char d[10];
    printf("测试scanf:");
    scanf("%d %c", &i, &o);
    printf("%d %c", i, o);   /*同类型要空格来把输入分成多个字段 不同类型可以不空格*/
                            //当前读入的值格式不对应 该字符将被留在stdio
    printf("输入一串数字：");
    scanf("%s ,%s", &h, &d); //scanf中的空格代表跳过后一个输入项前面所有的空格
    printf("%s %s",h ,d);



    
}