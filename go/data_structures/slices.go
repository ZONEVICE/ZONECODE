package main

import "fmt"

func main() {

    // =================================
    // Create empty slice
    // =================================
	emptySlice := make([]int, 0)
    fmt.Println(emptySlice) // []

    // =================================
    // Create a slice with content
    // =================================
    numbers := []int{1, 2, 3}
    fmt.Println(numbers) // [1 2 3]

    // =================================
    // Create slice from array
    // =================================
    // Create array.
    an_array := [5]int{1, 2, 3, 4, 5}
    // Create slice.
    var an_slice []int = an_array[1:3] // takes index 1 and 3
    fmt.Println(an_slice) // [2 3]

    // =================================
    // CRUD
    // =================================
    // Initial slice.
    crud_slice := make([]int, 0)

    // Add element.
    crud_slice = append(crud_slice, 1)
    fmt.Println(crud_slice) // [1]

    crud_slice = append(crud_slice, 5, 6, 7, 8)
    fmt.Println(crud_slice) // [1 5 6 7 8]

    // Update element
    crud_slice[1] = 55
    fmt.Println(crud_slice) // [1 55 6 7 8]

    // Remove element.
    // Gets index of the element to remove.
	remove_index := -1
    for i, v := range crud_slice {
		if v == 6 {
			remove_index = i
			break
		}
	}

    fmt.Println(len(crud_slice)) // 5

    /*
    Slicing: numbers[:index] gets all elements before the specified index,
    and numbers[index+1:] gets all elements after the specified index.
    */
	crud_slice = append(crud_slice[:remove_index], crud_slice[remove_index+1:]...)
	fmt.Println(crud_slice) // [1 55 7 8]
    
    fmt.Println(len(crud_slice)) // 4
    
}
