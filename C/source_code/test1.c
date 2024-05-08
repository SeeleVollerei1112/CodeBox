#include <stdio.h>
#include <math.h>
main(){
long a ;
		long b;
scanf("%ld %ld", &a, &b);
		long fun;
		
		if(b > 0) {
			fun = 1;
		} else {
			fun = -1;
		}
		
		fun = fun * abs(a);
printf("ld",fun);
}