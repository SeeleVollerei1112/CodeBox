#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 5

int list[MAX_SIZE];
int len = 0;

// 打印线性表中的所有元素
void printList() {
    for (int i = 0; i < len; i++) {
        printf("%d ", list[i]);
    }
    printf("\n");
}

int main() {
    printf("请输入%d个元素，每个元素以空格分隔：", MAX_SIZE);
    for (int i = 0; i < MAX_SIZE; i++) {
        int x;
        scanf("%d", &x);
        if (x == 0) break; // 输入 0 结束
        list[i] = x;
        len++;
    }
    printList(); // 打印线性表中的所有元素

    while (1) {
        int idx;
        printf("请输入查询序号（第几个元素），输入0退出：");
        scanf("%d", &idx);
        if (idx == 0) break; // 输入 0 结束
        if (idx < 1 || idx > len) {
            printf("输入的序号不合法！\n");
            continue;
        }
        printf("第%d个元素值是%d\n", idx, list[idx-1]);
        printf("元素%d是第%d个元素\n", list[idx-1], idx);
    }

    while (1) {
        int idx;
        printf("请输入要删除的元素的序号，输入0退出：");
        scanf("%d", &idx);
        if (idx == 0) break; // 输入 0 结束
        if (idx < 1 || idx > len) {
            printf("输入的序号不合法！\n");
            continue;
        }
        for (int i = idx - 1; i < len - 1; i++) {
            list[i] = list[i+1];
        }
        len--;
        printList(); // 打印删除元素后的线性表
    }

    return 0;
}
