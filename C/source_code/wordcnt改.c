#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTEX_NUM 20  // 最大顶点数

// 邻接表存储结构定义
typedef struct ArcNode {
    int adjvex;                 // 邻接点在数组中的位置下标
    struct ArcNode *nextarc;    // 指向下一个邻接点的指针
} ArcNode;

typedef struct VNode {
    char data;                  // 顶点的数据元素
    ArcNode *firstarc;          // 指向第一个邻接点的指针
} VNode, AdjList[MAX_VERTEX_NUM];

typedef struct {
    AdjList vertices;           // 图中顶点数组
    int vexnum, arcnum;         // 图中当前的顶点数和弧数
} ALGraph;

// 按照题目给出的节点建立图的邻接表
void CreateGraph(ALGraph *G) {
    G->vexnum = 7;
    G->arcnum = 7;
    
    // 顶点数组初始化
    for (int i = 0; i < G->vexnum; i++) {
        G->vertices[i].data = 'v' + i;
        G->vertices[i].firstarc = NULL;
    }

    // 建立边
    int i, j;
    int arr[7][2] = {{0, 1}, {4, 1}, {5, 1}, {5, 6}, {6, 4}, {1, 2}, {2, 3}};
    for (int k = 0; k < G->arcnum; k++) {
        i = arr[k][0];
        j = arr[k][1];
        ArcNode *p = (ArcNode *)malloc(sizeof(ArcNode));
        p->adjvex = j;
        p->nextarc = G->vertices[i].firstarc;
        G->vertices[i].firstarc = p;
    }
}

// 拓扑排序
void TopologicalSort(ALGraph *G) {
    int indegree[MAX_VERTEX_NUM] = {0};     // 存储每个顶点的入度
    int i, j, k, count = 0;
    ArcNode *p;
    int queue[MAX_VERTEX_NUM], front = 0, rear = 0;  // 定义队列

    // 计算每个顶点的入度
    for (i = 0; i < G->vexnum; i++) {
        p = G->vertices[i].firstarc;
        while (p != NULL) {
            indegree[p->adjvex]++;
            p = p->nextarc;
        }
    }

    // 将入度为 0 的顶点加入队列中
    for (i = 0; i < G->vexnum; i++) {
        if (indegree[i] == 0) {
            queue[rear++] = i;
        }
    }

    while (front != rear) {
        j = queue[front++];
        printf("%c ", G->vertices[j].data);   // 输出当前入度为 0 的顶点
        count++;
        p = G->vertices[j].firstarc;

        // 修改与 j 相邻的顶点的入度
    while (p != NULL) {
        k = p->adjvex;
        if (--indegree[k] == 0) {
            queue[rear++] = k;
        }
        p = p->nextarc;
        }
    }
    if (count < G->vexnum) {
        printf("There exists a cycle in the graph!\n");
    }
    }

    int main() {
    ALGraph G;
    CreateGraph(&G);
    TopologicalSort(&G);
    return 0;
    }

