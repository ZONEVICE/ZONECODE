package main

import "fmt"

func main() {

	foo := 1
	
	switch foo {
		case 0:
			fmt.Println("It is 0")
		case 1:
			fmt.Println("It is 1")
		default:
			fmt.Println("Dunno what it is")
	}

	// Weird way.
	switch bar := 5; bar {
		case 0:
			fmt.Println("It is 0")
		case 1:
			fmt.Println("It is 1")
		default:
			fmt.Println("Dunno what it is")
	}
}
