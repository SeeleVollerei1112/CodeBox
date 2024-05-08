#include<stdio.h>
int main()
{
    int a[5],i,j,t;
    printf("请输入五个数：\n");
    for(i=0;i<5;i++)
        scanf("%d",&a[i]);
        
    for(i=0;i<4;i++) 
    {
        for(j=0;j<4-i;j++)
        {
            if(a[j]>a[j+1]) 
            {
                t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
            }
        }
    }
    printf("排序后的数：\n");

    for(i=0;i<5;i++)
        printf("%d ",a[i]);

    return 0;
}
        