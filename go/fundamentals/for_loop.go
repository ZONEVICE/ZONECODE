package main

import "fmt"

func main() {
	// Simple example.
	for i := 0; i < 5; i++ {
		fmt.Println(i) // 0, 1, 2, 3, 4.
	}

	// Example with an array.
	fruits := []string{ "apple", "pear", "grape" }

	for index, fruit := range fruits {
		fmt.Printf("Index: %d, Name: %s", index, fruit)
        fmt.Println()
	}
}