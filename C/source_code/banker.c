#include <stdio.h>

#define False 0
#define True 1
#define Process_num 5//系统中所有进程数量

typedef struct {
 int r1;
 int r2;
 int r3;
}Resource;

//最大需求矩阵
Resource Max[Process_num] = {{6,4,3},{3,2,4},{9,0,3},{2,2,2},{3,4,3}};
//已分配资源数矩阵
Resource Allocation[Process_num] = {{1,1,0},{2,0,1},{4,0,2},{2,1,1},{0,1,2}};
//需求矩阵
Resource Need[Process_num] = {{5,3,3}, {1,2,3}, {5,0,1}, {0,1,1},{3,3,1}};
//可用资源向量
Resource Available = {3,3,2};
int safe[Process_num];
int Finish[Process_num] = {False, False, False, False, False};
Resource Work;

void ProbeAlloc(int process, Resource *res) {
    Available.r1-= res->r1;
    Available.r2-= res->r2;
    Available.r3-= res->r3;
    Allocation[process].r1 += res->r1;
    Allocation[process].r2 += res->r2;
    Allocation[process].r3 += res->r3;
    Need[process].r1-= res->r1;
    Need[process].r2-= res->r2;
    Need[process].r3-= res->r3;
}

void RollBack(int process, Resource *res) {
    Available.r1 += res->r1;
    Available.r2 += res->r2;
    Available.r3 += res->r3;
    Allocation[process].r1-= res->r1;
    Allocation[process].r2-= res->r2;
    Allocation[process].r3-= res->r3;
    Need[process].r1 += res->r1;
    Need[process].r2 += res->r2;
    Need[process].r3 += res->r3;
}

int SafeCheck() {
    Work = Available;
    int i, j = 0;

    for (i = 0; i < Process_num; i++) {
        if(Finish[i] == False && Need[i].r1<=Work.r1 && Need[i].r2<=Work.r2 && Need[i].r3<=Work.r3) {
            Work.r1 += Allocation[i].r1;
            Work.r2 += Allocation[i].r2;
            Work.r3 += Allocation[i].r3;
            Finish[i] = True;
            safe[j++] = i;
            i = -1;
        }
    }
    for (i = 0; i < Process_num; i++) {
        if (Finish[i] == False) {
            return False;
        }
    }
    return True;
}

int Request(int process, Resource *res) {
    if(res->r1 <= Need[process].r1 && res->r2 <= Need[process].r2 && res->r3 <= Need[process].r3) {
        if(res->r1 <= Available.r1 && res->r2 <= Available.r2 && res->r3 <= Available.r3) {
            ProbeAlloc(process, res);
            if(SafeCheck()) {
                return True;
            }
            else {
                printf("安全性检查失败。原因：系统将进入不安全状态，有可能引起死锁。\n");
                printf("正在回滚...\n");
                RollBack(process, res);
            }
        }
        else {
            printf("安全性检查失败。原因：请求向量大于可利用资源向量。\n");
        }
    }
    else {
        printf("安全性检查失败。原因：请求向量大于需求向量。\n");
    }
    return False;
}

void PrintTable() {
    int i;
    printf("\t\t\t*********资源分配表*********\n");
    printf("Process\tMax\t\tAllocation\tNeed\t\tAvailable\n");
    printf("\tR1 R2 R3\tR1 R2 R3\tR1 R2 R3\tR1 R2 R3\n");
    for (i = 0; i < Process_num; i++) {
        printf("P%d\t%d %d %d\t%d %d %d\t%d %d %d", i, Max[i].r1, Max[i].r2, Max[i].r3, Allocation[i].r1, Allocation[i].r2, Allocation[i].r3, Need[i].r1, Need[i].r2, Need[i].r3);
        if (i == 0) {
            printf("\t%d %d %d\n", Available.r1, Available.r2, Available.r3);
        } else {
            printf("\n");
        }
    }
    printf("\n");
}

int main() {
    int process;
    Resource res;
    char ch;
    printf("先检查初始状态是否安全。\n");
    if(SafeCheck()) {
        printf("系统处于安全状态。\n");
        printf("安全序列是{P%d,P%d,P%d,P%d,P%d}。\n",safe[0],safe[1],safe[2],safe[3],safe[4]);
    }
    else {
        printf("系统处于不安全状态。程序将退出...\n");
        printf("执行完毕。");
        return 0;
    }
    do {
        PrintTable();
        printf("请依次输入请求分配的进程和对三类资源的请求数量：\n");
        scanf("%d%d%d%d",&process,&res.r1,&res.r2,&res.r3);
        if (Request(process, &res)) {
            printf("分配成功。\n");
            printf("安全序列是{P%d,P%d,P%d,P%d,P%d}。\n",safe[0],safe[1],safe[2],safe[3],safe[4]);
        }
        else {
            printf("分配失败。\n");
        }
        printf("是否继续分配？(Y/N):");
        while ((getchar()) != '\n');  // 清除输入缓冲区，防止影响后续输入
        ch = getchar();
    } while (ch == 'Y' || ch == 'y');
    return 0;
}