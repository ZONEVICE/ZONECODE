# None

In Rust, a variable with value `None` is equivalent of `NULL` in other languages.

To create a `None` mutable variable, an enum must be used: `Option<T>`.

```rust
// Create a mutable Option<u32> variable, initially None (like null).
let mut maybe_number: Option<u32> = None;
println!("{:?}", maybe_number); // None

maybe_number = Some(42);
println!("{:?}", maybe_number);
```

If a mutable variable with type `Option<T>` is created, its value must always be set using `Some()`.