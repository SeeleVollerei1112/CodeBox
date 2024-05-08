#include <iostream>

using namespace std;

int main()
{
    int num,fuhao=1,nums[10];
    cin>>num;
    if(num < 0)
    {
        fuhao=0;
        num=-num;
    }
    int beichushu=num,i;
    for(i = 0;i<10;i++)
    {
        
        nums[i]=beichushu%10;
        beichushu=beichushu/10;
		if(beichushu==0)
		{
			break;
		}
    }
    //输出
    int reversednum=nums[i];
    for(int j=0;j >= i;j++)
    {
        reversednum=reversednum*10+nums[j];
    }
    if(fuhao==0)
    {
        reversednum=-reversednum;
    }
    cout<<reversednum<<endl;

    system("pause");
    return 0;
}