package main

import "fmt"

func main() {
    bool_a := true

    // if.
    
    if (bool_a == true) {
        fmt.Println("Output 1")
    }

    // else.

    if (bool_a == false) {
        fmt.Println("Unreachable output")
    } else {
        fmt.Println("Output 2")
    }

    // else if.

    num_a := 1

    if (num_a == 0) {
        fmt.Println("Unreachable output")
    } else if (num_a == 1) {
        fmt.Println("Output 3")
    } else {
        fmt.Println("Unreachable output")
    }

    // && and || and !.

    if (true && true) {
        fmt.Println("Output 4")
    }

    if (true || false) {
        fmt.Println("Output 5")
    }

    bool_b := false

    if (!bool_b) {
        fmt.Println("Output 6")
    }
}
