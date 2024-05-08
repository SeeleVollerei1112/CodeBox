#include<stdio.h>
#include<malloc.h>
#include<stdbool.h>;
#define InitSize 10
typedef struct
{
    int MaxSize;
    int length;
    int *data;
}SqList;  

void InitList(SqList *L)
    {
        L -> data = (int *)malloc(sizeof(int) * InitSize);           
        L -> length = 0;
        L -> MaxSize = InitSize;
    }

void IncreaseSize(SqList *L, int len)
{
    int *p = L -> data;
    L -> data = (int *)malloc(sizeof(int) * (L -> length + len));
    for (int i = 0; i < L -> length; i++)
        L -> data[i] = p[i];
    free(p);
}
void ListInsert(SqList *L, int i ,int e)
{
 if (i < 1 || i > L -> length )
    return false;
 if (L -> length = L -> MaxSize )
    return false;
 for ( int j = L -> length; i <= j; i++)
    L -> data[j] = L -> data[j - 1];
    L -> data[i - 1] = e;
    L -> length++;
}
void ListDelete(SqList *L, int i, int *e)
{
    if(i < 1 || i > L -> length)
        return false;
    e = L -> data[i - 1];
    for(int j = L -> data; j > i; i++)
        L -> data[i - 1] = L -> data[i];
    L -> length--;
    return true;    
}
int GetElem(SqList L, int i)
{
    return L.data[i - 1];

    return 0;
}
int LocateElem(SqList L, int e)
{
    for(int i = 0; i < L.length; i++)
        if(L.data[i] == e)
            return i+1;
    return 0;
}
int main()
{
    SqList L;
    InitList( &L);
    L.data[0] = 0;
    int e = -1;
    ListDelete(&L, 1, &e);
    printf("L->data[0] = %d, e = %d", L.data[0], e);


        return 0;
 }