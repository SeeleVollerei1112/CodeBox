int main()
{
        int a[5],i,t,j;
        for(i=0;i<5;i++)
         scanf("%d",&a[i]);
         for(i=0;i<4;i++) // 这里应该是分号，不是逗号
         {
                     for(j=0;j<4-i;j++) // 这里应该是分号，不是逗号
                 {
                     if(a[j]>a[j+1])
                        {
                        t=a[j];
                        a[j]=a[j+1];
                        a[j+1]=t;
                        }
                 }  
         }
            for(i=0;i<5;i++)
                printf("%d",a[i]);
}