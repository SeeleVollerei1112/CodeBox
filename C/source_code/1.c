#include <stdio.h>

int main(void) {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
//录入
    int max_sum = 0;
    for (int i = 0; i < n; i++) {
        int min_num = nums[i];
        int sum = 0;
        for (int j = i; j < n; j++) {
            if (nums[j] < min_num) {
                min_num = nums[j];
            }
            //判断最小值
            sum += nums[j];
            int cur_sum = min_num * sum;
            if (cur_sum > max_sum) {
                max_sum = cur_sum;
            }
            //判断最大值（题目）
        }
    }

    printf("%d\n", max_sum);

    return 0;
}