#include <stdio.h>

int main() {
    char c = 'A';
    int d = -123;
    float f = 123.456f;
    double lf = 12345.6789;
    long l = 123456789L;
    long long ll = 123456789012345LL;
    unsigned int u = 3000000000U;
    unsigned long ul = 4000000000UL;
    unsigned long long ull = 12345678901234567890ULL;
    char *s = "Hello, world!";
    void *p = &d;
    int count;

    printf("Character: %c\n", c);
    printf("Signed integer: %d\n", d);
    printf("Float: %f\n", f);
    printf("Float with precision (lowercase): %g\n", f);
    printf("Float with precision (uppercase): %G\n", f);
    printf("Signed integer (alternative): %i\n", d);
    printf("Long (ld): %ld\n", l);
    printf("Long (li): %li\n", l);
    printf("Double: %lf\n", lf);
    printf("Long double: %Lf\n", (long double)lf);
    printf("Unsigned int or unsigned long: %lu\n", ul);
    printf("Long long (lli): %lli\n", ll);
    printf("Long long (lld): %lld\n", ll);
    printf("Unsigned long long: %llu\n", ull);
    printf("Octal: %o\n", u);
    printf("Pointer: %p\n", p);
    printf("String: %s\n", s);
    printf("Unsigned int: %u\n", u);
    printf("Hexadecimal (lowercase): %x\n", u);
    printf("Hexadecimal (uppercase): %X\n", u);

    // %n example: stores number of characters printed so far in count
    printf("This is a test%n\n", &count);
    printf("Number of characters printed before %%n: %d\n", count);

    // %% prints a percent sign
    printf("Percent sign: %%\n");

    // 2 different data types combined
    printf("A string %s and number %d", s, d);

    return 0;
}
