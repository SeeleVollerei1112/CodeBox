#include <stdio.h>
#include <stdlib.h>

// 定义二叉树节点结构体
struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

// 根据中序遍历和后序遍历重建二叉树
struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    if (inorderSize == 0 || postorderSize == 0) {
        return NULL;
    }

    // 根据后序遍历序列的最后一个元素构建根节点
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = postorder[postorderSize - 1];

    // 在中序遍历序列中查找根节点位置
    int rootIndex;
    for (int i = 0; i < inorderSize; i++) {
        if (inorder[i] == root->val) {
            rootIndex = i;
            break;
        }
    }

    // 递归构建左子树和右子树
    root->left = buildTree(inorder, rootIndex, postorder, rootIndex);
    root->right = buildTree(inorder + rootIndex + 1, inorderSize - rootIndex - 1, postorder + rootIndex, postorderSize - rootIndex - 1);

    return root;
}

// 前序遍历二叉树并输出节点值
void preorderTraversal(struct TreeNode* root) {
    if (root == NULL) {
        return;
    }

    printf("%d ", root->val);
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

int main() {
    int inorder[] = {2, 3, 15, 29, 7};
    int postorder[] = {6, 18, 3, 20, 3};
    int size = sizeof(inorder) / sizeof(inorder[0]);

    struct TreeNode* root = buildTree(inorder, size, postorder, size);
    printf("先序遍历结果：");
    preorderTraversal(root);
    printf("\n");

    return 0;
}
