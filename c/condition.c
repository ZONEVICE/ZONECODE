#include <stdio.h>

int main() {

    int n1 = 10;
    int n2 = 20;

    if (n1 == 10) {
        printf("The value is 10.\n");
    }

    if (n2 == 10) {
        
    } else {
        printf("The value is  not 20.\n");
    }

    if ((n1 + n2) == 30) {
        printf("Add of values is 30.\n");
    }

    if (n1 == 10 && n2 == 20) {
        printf("Truly 1.\n");
    }

    if (n1 == 10 || n2 == 30) {
        printf("Truly 2.\n");
    }

    if (n1 < n2) {
        printf("Truly 3.\n");
    }

    if (n1 != n2) {
        printf("Values not equal.\n");
    }
    
    return 0;
}
