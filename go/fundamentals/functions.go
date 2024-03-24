package main

import ("fmt"; "strconv")

// Function.
// Can have or not the variable type parameter typed.
func add(a, b int) int {
	return a + b
}

func main() {
	res := add(10, 10)
	fmt.Println("Result: " + strconv.Itoa(res))
}
