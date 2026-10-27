# None

In Rust, a variable with value `None` is equivalent of `NULL` in other languages.

To create a `None` mutable variable, the type `Option<T>` must be used.

To mutate the variable, the function `Some()` must be used.

```rust
// Create the variable as None.
let mut maybe_number: Option<u32> = None;
println!("{:?}", maybe_number); // None

// Set a value.
maybe_number = Some(30);
println!("{:?}", maybe_number); // 30

// Add operation.
let a_number: u32 = 10;
println!("{:?}", maybe_number.map(|n| n + a_number)); // Some(40)
println!("{}", maybe_number.unwrap_or(0) + a_number); // 40
```
