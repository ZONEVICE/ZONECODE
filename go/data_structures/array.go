package main

import "fmt"

func main() {

	// =========================================
	// Declaration.
	// =========================================
	
	// Array declaration.
	var array_declaration [5]string
    fmt.Printf("%T", array_declaration) // [5]string
    fmt.Println(array_declaration) // [5]string[    ]
    
	// Array declaration + values.
	var array_declaration_filled = [3]int{1, 2, 3}
    fmt.Println(array_declaration_filled) // [1 2 3]

	// Array with inferred length.
	var array_inferred_length = [...]string{"lorem", "ipsum"}
	array_inferred_length_2 := [...]int{4, 5, 6}

    fmt.Println(array_inferred_length) // [lorem ipsum]
    fmt.Println(array_inferred_length_2) // [4 5 6]

	// =========================================
	// "Push" append into array.
	// =========================================

    // =========================================
	// Update.
	// =========================================

	// Array declaration and then giving.
	var array_declaration_then [3]int
    array_declaration_then[0] = 10
    fmt.Println(array_declaration_then) // [10 0 0]

	// =========================================
	// Delete.
	// =========================================

    // You cannot delete a value. 
    // What is done is updating to the default value.
    
    var array_delete_value = [2]int{10, 0}
    array_delete_value[0] = 0
    fmt.Println(array_delete_value) // [0 0]

	// =========================================
	// T.
	// =========================================

	// =========================================
	// Length.
	// =========================================

	// =========================================
	// Multidimensional.
	// =========================================

	// =========================================
	// Array comparison.
	// =========================================
	
}
