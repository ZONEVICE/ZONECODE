package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Variable scanner declaration.
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Type something: ")
	// Console freezes and awaits for user input.
	scanner.Scan()
	// User input is stored inside a variable as String.
	input := scanner.Text()
	fmt.Println("You typed: " + input)
}
