package main

import "fmt"
import "strconv"

type Person struct {
    name string
    minds int
}

func main() {
    // Declaration way No.1.
    var person Person
    person.name = "VICE"
    person.minds = 7
    
    fmt.Println("person name: " + person.name)
    fmt.Println("person minds: " + strconv.Itoa(person.minds))

    // 2.
    person2 := Person{name: "TOM", minds: 1}
    fmt.Println("person2 name: " + person2.name)
    fmt.Println("person2 minds: " + strconv.Itoa(person2.minds))

    // 3.
    person3 := Person{"BLK", 99}
    fmt.Println("person3 name: " + person3.name)
    fmt.Println("person3 minds: " + strconv.Itoa(person3.minds))
}
