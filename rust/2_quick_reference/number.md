# Number

Signed numbers: support negative and possitive.
Unsigned numbers: only 0 or +.

| Size    | Signed (i) | Range (mín a máx)              | Unsigned (u) | Range (min a max) |
| ------- | ---------- | ------------------------------ | ------------ | ----------------- |
| 8-bit   | i8         | -128 a 127                     | u8           | 0 a 255           |
| 16-bit  | i16        | -32,768 a 32,767               | u16          | 0 a 65,535        |
| 32-bit  | i32        | -2,147,483,648 a 2,147,483,647 | u32          | 0 a 4,294,967,295 |
| 64-bit  | i64        | -2^63 a 2^63 - 1               | u64          | 0 a 2^64 - 1      |
| 128-bit | i128       | -2^127 a 2^127 - 1             | u128         | 0 a 2^128 - 1     |
| arch    | isize      | Same as i32 o i64              | usize        | Same as u32 o u64 |
