#include <stdio.h>

int main() {
    int t;
    scanf("%d", &t); // 测试用例组数

    for (int i = 0; i < t; i++) {
        int n;
        scanf("%d", &n); // 课程总数
        double credits[n]; // 学分数组
        int scores[n]; // 成绩数组

        for (int j = 0; j < n; j++) {
            scanf("%lf", &credits[j]); // 第j门课程的学分数
        }

        for (int j = 0; j < n; j++) {
            scanf("%d", &scores[j]); // 第j门课程的成绩
        }

        double totalCreditsPoints = 0; // 总学分绩点
        double totalCredits = 0; // 总学分

        for (int j = 0; j < n; j++) {
            if (scores[j] >= 60) {
                double gradePoint = (scores[j] - 50) / 10.0; // 课程成绩绩点
                double creditsPoints = gradePoint * credits[j]; // 课程学分绩点数
                totalCreditsPoints += creditsPoints;
                totalCredits += credits[j];
            }
            else {
                totalCredits += credits[j];
            }
        }

        double averageGPA = totalCreditsPoints / totalCredits; // 学年平均学分绩点
        printf("%.2f\n", averageGPA);
    }

    return 0;
}
