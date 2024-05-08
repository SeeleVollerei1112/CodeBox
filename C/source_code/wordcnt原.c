#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTICES 5

typedef struct EdgeNode {
    int adjvex; // 邻接顶点编号
    struct EdgeNode *next; // 指向下一个邻接节点的指针
} EdgeNode;

typedef struct VertexNode {
    int vertex; // 顶点编号
    EdgeNode *firstedge; // 指向第一个邻接节点的指针
} VertexNode;

typedef struct {
    VertexNode adjlist[MAX_VERTICES]; // 邻接表
    int num_vertices; // 顶点数
} Graph;

void BFS(Graph G, int v, int visited[], int parent[]) {
    visited[v] = 1;

    // 创建一个队列
    int queue[MAX_VERTICES], front = -1, rear = -1;

    // 将顶点v加入队列
    queue[++rear] = v;

    while (front != rear) {
        // 从队列中取出一个顶点
        int w = queue[++front];

        EdgeNode *p = G.adjlist[w].firstedge;
        while (p != NULL) {
            int u = p->adjvex;
            if (visited[u] == 0) {
                visited[u] = 1;
                parent[u] = w;

                // 将顶点u加入队列
                queue[++rear] = u;
            }
            p = p->next;
        }
    }
}

void BFSTraverse(Graph G) {
    int visited[MAX_VERTICES] = {0};
    int parent[MAX_VERTICES] = {-1};

    for (int v = 0; v < G.num_vertices; v++) {
        if (visited[v] == 0) {
            BFS(G, v, visited, parent);
        }
    }

    // 输出生成树
    for (int i = 0; i < G.num_vertices; i++) {
        if (parent[i] != -1) {
            printf("(%d, %d)\n", parent[i], i);
        }
    }
}

int main() {
    Graph G;
    G.num_vertices = MAX_VERTICES;

    // 初始化邻接表
    for (int i = 0; i < G.num_vertices; i++) {
        G.adjlist[i].vertex = i;
        G.adjlist[i].firstedge = NULL;
    }

    // 添加边
    EdgeNode *e;
    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 1;
    e->next = G.adjlist[0].firstedge;
    G.adjlist[0].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 2;
    e->next = G.adjlist[0].firstedge;
    G.adjlist[0].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 3;
    e->next = G.adjlist[0].firstedge;
    G.adjlist[0].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 1;
    e->next = G.adjlist[1].firstedge;
    G.adjlist[1].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 2;
    e->next = G.adjlist[1].firstedge;
    G.adjlist[1].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 4;
    e->next = G.adjlist[1].firstedge;
    G.adjlist[1].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 0;
    e->next = G.adjlist[2].firstedge;
    G.adjlist[2].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 1;
    e->next = G.adjlist[2].firstedge;
    G.adjlist[2].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 3;
    e->next = G.adjlist[2].firstedge;
    G.adjlist[2].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 2;
    e->next = G.adjlist[3].firstedge;
    G.adjlist[3].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 0;
    e->next = G.adjlist[4].firstedge;
    G.adjlist[4].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 1;
    e->next = G.adjlist[4].firstedge;
    G.adjlist[4].firstedge = e;

    e = (EdgeNode*)malloc(sizeof(EdgeNode));
    e->adjvex = 2;
    e->next = G.adjlist[4].firstedge;
    G.adjlist[4].firstedge = e;

    BFSTraverse(G); // 进行广度优先遍历，并输出生成树

    return 0;
}