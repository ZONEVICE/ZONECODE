package main

import (
	"fmt"
	"strconv"
)

func main() {
	// ************************** String to Integer **************************
	var str string = "500"
	// First variable is the Integer result.
	// strconv.ParseInt returns two variables. first one is the Integer, second
	// one is an error.
	//   v
	// Function that parses String to Integer.
	//        vvvvvvvvvvvvvvvv
	//
	// Base. 10 means hexadecimal.
	//                              vv
	// Bit size. Normally 32 or 64. This example goes for 64.
	//                                  vv
	res, _ := strconv.ParseInt(str, 10, 64)
	fmt.Println(res - 50) // 450

	// ************************** Integer to String **************************
	number1 := 500
	// Converts Integer into String  vvvv
	fmt.Println("Number: " + strconv.Itoa(number1)) // Number: 500
}
