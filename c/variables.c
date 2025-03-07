#include <stdio.h>

int main() {
    // -------------------------------------------
    // integer
    int foo;
    foo = 5;
    int var = 10, zet = 5;
    printf("The sum is %d\n", foo + var + zet); // 15

    // -------------------------------------------
    // float
    float my_float = 100.1234567f;
    printf("Float is %f\n", my_float);

    // -------------------------------------------
    // double
    double my_double = 100.123456;
    printf("Double is %lf\n", my_double);

    printf("\n");
    return 0;
}
