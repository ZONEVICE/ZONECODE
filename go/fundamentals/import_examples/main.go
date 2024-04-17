package main

// Imports whatever is inside from this pwd + misc directory.
import (
	"import_examples/misc"
)

func main(){
	// We indicate the name of the package, in this case it is "vendor".
	// Then the function is called.
	// Notice both files "vendor_one.go" and "vendor_two.go" are
	// in the same directory with the same package flag.
	// The .go files cannot have a different package name if they are
	// inside the same directory.
	vendor.FunctionVendorOne("String agument from main.")
	vendor.FunctionVendorTwo("String agument from main.")
}
