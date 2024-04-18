package main

import "fmt"

func main() {
	// While loops are declared with the word "for".
	cont := 1
	for cont <= 1000 {
		fmt.Println(cont)
		cont += 1
	}
}
