#include <stdio.h>

// C support actual booleans starting in C99.
// In original standard C (C89/C90), integers are used.
int main() {

    int truly = 1; // true
    int falsy = 0; // false

    int a = 5, b = 10;

    if (a > b) {
        printf("a is greater than b\n");
    } else if (a < b) {
        printf("a is NOT greater than b\n");
    }

    printf("%d\n", a > b);  // prints 0
    printf("%d\n", a < b);  // prints 1

    return 0;
}
