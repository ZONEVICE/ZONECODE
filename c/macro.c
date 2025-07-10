#include <stdio.h>

#define MY_MACRO 100

int main() {
    // -------------------------------------------
    // macros
    // Explanation: macros are preprocessor directives that
    // replace the macro name with its value before compilation.
    printf("Value of macro is %d\n", MY_MACRO);
    
    return 0;
}
