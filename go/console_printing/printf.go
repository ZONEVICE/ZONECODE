package main

import (
	"fmt"
)

// tldr: Printf allows complex console printing.

func main() {
	// ************************** Printf syntax **************************

	// %T: prints the type of the parameter.
	// %v: prints the value of the parameter (same as %s if string).

	// Prints the type of the variable when "%T" is passed.
	fmt.Printf("%T", "Hello world") // => string

	// Format of the string to print out:
	//                vvvvv
	// Parameters:
	//                        vvvvvv
	fmt.Printf("Lorem %T %v", 10, 10) // => Lorem int 10

	// ************************** Boolean Printing **************************
	// %t: prints boolean value.
	var myBooleanTrue bool = true
	var myBooleanFalse bool = false
	fmt.Printf("%t %t", myBooleanTrue, myBooleanFalse) // => true false
	fmt.Printf(myBooleanTrue, myBooleanFalse)
		// => cannot use myBooleanTrue (variable of type bool) as type string in argument to fmt.Printf

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
	// %s: displays default string view.
	// %q: prints strings between quotation marks.
	var name string = "VICE"
	fmt.Printf("Normal: %s", name)    // Normal: VICE
	fmt.Printf("Quotation: %q", name) // Quotation: "VICE"
	fmt.Printf("Quotation: %T %q", name, name) // Quotation: string "VICE"
}
