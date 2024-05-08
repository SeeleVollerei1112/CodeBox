#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct TreeNode {
    char val;
    int weight;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

TreeNode *createTree(char *str, int *pos);
void setNodeInfo(TreeNode *node, char *v, int *w, int *index);
int getWeight(TreeNode *node);
void getHuffmanCode(TreeNode *node, char *code, int len);

int main() {
    char str[] = "A(B(D(F,G),E),C)";
    char v[] = {'a', 'b', 'c', 'd'};
    int w[] = {1, 2, 3, 4};
    int len = strlen(str);
    int pos = 0;
    TreeNode *root = createTree(str, &pos);
    setNodeInfo(root, v, w, &pos);
    int huffmanWeight = getWeight(root);
    printf("The weight of the root node in the Huffman tree is %d\n", huffmanWeight);
    char code[100];
    getHuffmanCode(root, code, 0);
    return 0;
}

TreeNode *createTree(char *str, int *pos) {
    char ch = str[*pos];
    if (ch == '\0') {
        return NULL;
    }
    *pos += 1;
    TreeNode *node = NULL;
    if (ch >= 'A' && ch <= 'Z') {
        node = (TreeNode*)malloc(sizeof(TreeNode));
        node->val = ch;
        node->left = createTree(str, pos);
        node->right = createTree(str, pos);
    }
    return node;
}

void setNodeInfo(TreeNode *node, char *v, int *w, int *index) {
    if (node == NULL) {
        return;
    }
    if (node->left == NULL && node->right == NULL) {
        node->val = v[*index];
        node->weight = w[*index];
        *index += 1;
    }
    setNodeInfo(node->left, v, w, index);
    setNodeInfo(node->right, v, w, index);
}

int getWeight(TreeNode *node) {
    if (node == NULL) {
        return 0;
    }
    if (node->left == NULL && node->right == NULL) {
        return node->weight;
    }
    int leftWeight = getWeight(node->left);
    int rightWeight = getWeight(node->right);
    node->weight = leftWeight + rightWeight;
    return node->weight;
}

void getHuffmanCode(TreeNode *node, char *code, int len) {
    if (node == NULL) {
        return;
    }
    if (node->left == NULL && node->right == NULL) {
        code[len] = '\0';
        printf("%c: %s\n", node->val, code);
        return;
    }
    code[len] = '0';
    getHuffmanCode(node->left, code, len + 1);
    code[len] = '1';
    getHuffmanCode(node->right, code, len + 1);
}
