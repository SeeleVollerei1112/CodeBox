#include<stdio.h>
int main()
{
    int a[5] ,i,t;
    for(i=0;i<5;i++){
       scanf("%d",&a[i]);
    }
    for(i=0;i<4,i++;){
        for(i=0;i<4-i,i++;){

        if(a[i]>a[i+1]){
          t=a[i];
          a[i]=a[i+1];
          a[i+1]=t;
          }
        }
    }
    for(i=0;i<5;i++){
        printf("%d",a[i]);
    }

    return 0;
}