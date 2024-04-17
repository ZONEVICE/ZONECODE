package main

import ("fmt"; "strconv")

// Function.
// Can have or not the variable type parameter typed.
func add(a, b int) int {
	return a + b
}

// Functions that return "void" don't need to get the
// return type typed.
func VoidFunction(input string) {
	fmt.Println("This is a void returning function. Input: " + input)
}

func main() {
	res := add(10, 10)
	fmt.Println("Result: " + strconv.Itoa(res))
	VoidFunction("Void function.")
}
