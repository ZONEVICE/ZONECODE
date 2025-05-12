#include <stdio.h>

int main()
{

    // 1 dimension.

    int numbers[3];

    numbers[0] = 10;
    numbers[1] = 10;
    numbers[2] = 10;

    // Explanation of array size logic:
    // `sizeof(numbers)` returns the total size of the array in bytes.
    // Assuming an int takes 4 bytes, 3 numbers equal 12 bytes.
    // `sizeof(numbers[0])` returns the size of a single element (4 bytes).
    // Dividing the total size by the size of one element gives the number of elements:
    // 12 bytes / 4 bytes per element = 3 elements.
    // This ensures the loop iterates over all elements without hardcoding the count.

    for (int i = 0; i < sizeof(numbers) / sizeof(numbers[0]); i++)
    {
        printf("%d\n", numbers[i]);
    }

    printf("Result of adding numbers is %d\n", (numbers[0] + numbers[1] + numbers[2]));

    // 2 dimension initialized.
    int matrix_2d[3][3] = {
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

    // 2 dimension initialized example 2
    // The incide braces are optional. Can have
    // initialization like this too.
    int a[3][4] = {0,1,2,3,4,5,6,7,8,9,10,11};

    // 3 dimension

    // Empty
    int matrix_3d[3][3][3];

    printf("%d ", matrix_3d[0][0][0]); // 0
    
    // Initialized
    int matrix_3d_init[3][3][3] = {
        {{1,2,3},{4,5,6},{7,8,9}},
        {{10,11,12},{13,14,15},{16,17,18}},
        {{19,20,21},{22,23,24},{25,26,27}},
    };

    printf("%d ", matrix_3d_init[1][1][1]); // 14

}
