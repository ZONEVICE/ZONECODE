package main

import "fmt"

func main() {
	// ************************** Integers **************************
	var byte_ byte = 255                      // 0 to 255
	var integer8 int8 = 127                   // -128 to 127
	var integer16 int16 = 32767               // -32768 to 32767
	var integer32 int32 = 2147483647          // -2147483648 to 2147483647
	var integer64 int64 = 9223372036854775807 // -9223372036854775808 to 9223372036854775807
	var integer int = 1 					  // System dependent size. Can be int32 or int64

	var unint8_ uint8 = 255                    // 0 to 255
	var unint16_ uint16 = 65535                // 0 to 65535
	var unint32_ uint32 = 4294967295           // 0 to 4294967295
	var unint64_ uint64 = 18446744073709551615 // 0 to 18446744073709551615

	fmt.Println(byte_, integer8, integer16, integer32, integer64, integer)
	fmt.Println(unint8_, unint16_, unint32_, unint64_)

	// ************************** Floats **************************
	var float32_ float32 = 1.234567890123
	var float64_ float64 = 1.234567890123

	fmt.Println(float32_, float64_)

	// ************************** Strings **************************
	var string1 string = "Hello world"
	var string2 := "Hello world"

	fmt.Println(string1)

	// ************************** Booleans **************************
	var boolean1 bool = false
	var boolean2 bool = true
	var boolean3 := true

	fmt.Println(boolean1, boolean2)

	// ************************** Constants. **************************
	const PI float32 = 3.14
}
