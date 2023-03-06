package main

import (
	"fmt"
)

func main() {
	// ************************** Printf syntax **************************

	// %T: prints the type of the parameter.
	// %v: prints the value of the parameter.

	// Prints the type of the variable when "%T" is passed.
	fmt.Printf("%T", "Hello world") // String

	// Format of the string to print out:
	//         vvvvvvvvvvvvv
	// Parameters:
	//                       vvvvvvv
	fmt.Printf("Lorem %T %v", 10, 10)
	// => Lorem int 10

	// ************************** Boolean Printing **************************
	// %t: prints boolean value.
	var myBooleanTrue bool = true
	var myBooleanFalse bool = false
	fmt.Printf("%t %t", myBooleanTrue, myBooleanFalse)
	// => true false

	// ************************** Integers **************************
	// %b: base 2 or Binary.
	// %o: base 8 or Octal.
	// %d: base 10 or decimal (same value humans use).
	// %x: base 16 or hexadecimal
	fmt.Printf("Binary representation: %b", 25)        // => Binary representation: 11001
	fmt.Printf("Octal representation: %o", 25)         // => Octal representation: 31
	fmt.Printf("Decimal/human representation: %d", 25) // => Decimal/human representation: 25
	fmt.Printf("Hexadecimal representation: %x", 25)   // => Hexadecimal representation: 19

	// ************************** Strings **************************
	// %s: how default strings are displayed.
	// %q: prints out strings between quotation marks.
	var name string = "VICE"
	fmt.Printf("Normal: %s", name)    // Normal: VICE
	fmt.Printf("Quotation: %q", name) // Quotation: "VICE"
}
