// https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
fn main() {
    // Mutable variables.
    let mut x: u32 = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");

    // Constant variables.
    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
    println!("Three hours in seconds is {}", THREE_HOURS_IN_SECONDS);

    // Shadowing.
    let y = 5; // Shadowed variable.
    let y = y + 1; // Masks the shadowed varible.
    let y = y + 1; // Masks the shadowed varible again.

    {
        let y = y * 2; // Masks the variable again in this inner scope.
        println!("The value of y in the inner scope is: {y}");    
    } // The shadowing ends. The value returns to be the assigned in this scope.

    println!("The value of y is: {y}");

    // Shadowing / Changing variable type.

    let spaces = "        ";
    let spaces = spaces.len(); // Masks with a different type.
    println!("The input number of spaces is {}", spaces);

    /*
    This causes an error / mismatched types.
    let mut spaces = "     ";
    spaces = spaces.len();
    */
}
