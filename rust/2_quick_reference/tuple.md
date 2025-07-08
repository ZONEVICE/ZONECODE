# Tuple

It's like an array, but values can be different. Types cannot be different in their settled position.
Tuples are defined in runtime and its size and value type defined in compile time.

**Usage example**

```rust
let tuple_1 = (true, 1, 'e', "Rust");
println!("{}, {}, {}, {}", tuple_1.0, tuple_1.1, tuple_1.2, tuple_1.3); // true, 1, e, Rust

let tuple_2: (bool, u8) = (false, 5);
println!("{}, {}", tuple_2.0, tuple_2.1); // false, 5
```

**Error on: change not mutable variable**

```rust
let tuple_3 = (false, 5);
tuple_3.0 = true; // This line will cause compiler panic.
```

**You cannot create a tuple with one single value**

```rust
let tuple_4 = (false); // Compiler says: remove these parentheses 
```

**You can make tuples mutable, however; by adding the `mut` keyword.**

```rust
let mut mutable_tuple = (true, 1);
mutable_tuple.0 = false;
println!("{}, {}", mutable_tuple.0, mutable_tuple.1); // false, 1
```

**Tuples cannot be accessed by an index.
Meaning it cannot be iterated.**

```rust
let mut mutable_tuple = (50, 1);
let ix: u8 = 0;
println!("{}", mutable_tuple.ix); // This will cause compiler panic.
```