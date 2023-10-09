package main

import (
	"fmt"
)

func main() {
	// ************************** Explicit Variable Declaration **************************
	var string_1 string = "hello world"

	var string_2 string
	string_2 = "Good bye world"

	fmt.Println(string_1, string_2)

	// ************************** Short Variable Declaration **************************
	// ":=" can be used to declare a variable faster without having to provide the
	// variable type.
	// Possible problem: creating a variable that stores number 1 might be created as
	// int8 making it memory overflow error if we try to set a value over 127 or below
	// -128 in the future.
	name := "Thomas"   // String.
	oranges := 10      // Integer. Might be int8.
	isRunning := false // Boolean.

	fmt.Println(name, oranges, isRunning)

	// ************************** Implicit Variable Declaration **************************
	// Leave Go set the data type by it's best guess.
	// Possible problem: creating a variable that stores number 1 might be created as
	// int8 making it memory overflow error if we try to set a value over 127 or below
	// -128 in the future.
	var color = "red"
	var myNumber = 1

	/*
		// SYNTAX ERROR.
		var lorem
		lorem = "ipsum"
	*/

	fmt.Println(color, myNumber)
}
