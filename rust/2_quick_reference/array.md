# Array

Arrays can only contain one type of data and its size is fixed.

```rust
let arr: [u8; 5] = [1, 2, 3, 4, 5];
println!("{}", arr[4]); // 5
```

Editable array is set placing `mut` keyboard.

```rust
let mut arr: [&str; 2] = ["ALPHA", "BETA"];
arr[1] = "WHISKEY";
println!("{}", arr[1]); // WHISKEY
```

You cannot set an array with a missing property.

```rust
let mut arr: [i8; 2] = [0];
println!("{}", arr[0]);
```