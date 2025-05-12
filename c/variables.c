#include <stdio.h>

#define MY_MACRO 100

int main() {
    // -------------------------------------------
    // macros
    // Explanation: macros are preprocessor directives that
    // replace the macro name with its value before compilation.
    printf("Value of macro is %d\n", MY_MACRO);

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
    printf("Parsed float is %.2f\n", my_float);

    // -------------------------------------------
    // double
    double my_double = 100.123456;
    printf("Double is %lf\n", my_double);

    printf("\n");
    return 0;
}
