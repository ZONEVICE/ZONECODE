#include <stdio.h>

int main()
{

    // 1 dimension

    int numbers[3];

    numbers[0] = 10;
    numbers[1] = 10;
    numbers[2] = 10;

    for (int i = 0; i < sizeof(numbers) / sizeof(numbers[0]); i++)
    {
        printf("%d\n", numbers[i]);
    }

    printf("Result of adding numbers is %d\n", (numbers[0] + numbers[1] + numbers[2]));

    // 2 dimension

    int matrix_2d[][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};

    int matrix_2d_rows = sizeof(matrix_2d) / sizeof(matrix_2d[0]);
    int matrix_2d_columns = sizeof(matrix_2d[0]) / sizeof(matrix_2d[0][0]);

    for (int i = 0; i < matrix_2d_rows; i++)
    {
        for (int j = 0; j < matrix_2d_columns; j++)
        {
            printf("%d ", matrix_2d[i][j]);
        }
        printf("\n");
    }

    printf("\n");
    return 0;
}
