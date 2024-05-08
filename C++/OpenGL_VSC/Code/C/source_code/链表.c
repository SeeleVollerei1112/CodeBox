#include <stdio.h>
#include <stdlib.h>

// 定义二叉树结点结构体
struct TreeNode {
    char val;
    struct TreeNode* left;
    struct TreeNode* right;
};

// 创建二叉树
struct TreeNode* create_binary_tree() {
    char val;
    scanf("%c", &val);
    if (val == '#') { // '#' 表示空结点
        return NULL;
    }
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = create_binary_tree();
    node->right = create_binary_tree();
    return node;
}

// 输出二叉树
void print_binary_tree(struct TreeNode* root) {
    if (root == NULL) {
        return;
    }
    printf("%c ", root->val);
    print_binary_tree(root->left);
    print_binary_tree(root->right);
}

// 求二叉树高度
int binary_tree_height(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }
    int left_height = binary_tree_height(root->left);
    int right_height = binary_tree_height(root->right);
    return (left_height > right_height ? left_height : right_height) + 1;
}

// 求结点数
int binary_tree_node_count(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }
    int left_count = binary_tree_node_count(root->left);
    int right_count = binary_tree_node_count(root->right);
    return left_count + right_count + 1;
}

// 求叶子结点数
int binary_tree_leaf_count(struct TreeNode* root) {
    if (root == NULL) {
        return 0;
    }
    if (root->left == NULL && root->right == NULL) {
        return 1;
    }
    int left_count = binary_tree_leaf_count(root->left);
    int right_count = binary_tree_leaf_count(root->right);
    return left_count + right_count;
}

int main() {
    struct TreeNode* root = create_binary_tree();

    printf("输出二叉树：");
    print_binary_tree(root);
    printf("\n");

    int height = binary_tree_height(root);
    printf("二叉树高度：%d\n", height);

    int node_count = binary_tree_node_count(root);
    printf("结点数：%d\n", node_count);

    int leaf_count = binary_tree_leaf_count(root);
    printf("叶子结点数：%d\n", leaf_count);

    free(root);

    return 0;
}
