#include <stdio.h>

/*
Booleans are introduced in C99.
To use them, it is required to include them in the scope.
It can break really old C code.
*/
#include <stdbool.h>

int main() {

    // C99 booleans.
    bool b1 = true;
    bool b2 = false;

    if (b1) {
        printf("Boolean 1 is true\n");
    }

    if (!b2) {
        printf("Boolean 2 is false\n");
    }

    return 0;
}
