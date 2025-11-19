| Data Type         | Storage Size | Signed Range                                            | Unsigned Range                    | Description                                                          |
| ----------------- | ------------ | ------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| **TINYINT**       | 1 byte       | -128 to 127                                             | 0 to 255                          | Smallest integer type, useful for very small numbers.                |
| **SMALLINT**      | 2 bytes      | -32,768 to 32,767                                       | 0 to 65,535                       | Suitable for small integers.                                         |
| **MEDIUMINT**     | 3 bytes      | -8,388,608 to 8,388,607                                 | 0 to 16,777,215                   | Medium-sized integers.                                               |
| **INT (INTEGER)** | 4 bytes      | -2,147,483,648 to 2,147,483,647                         | 0 to 4,294,967,295                | Standard integer type for most use cases.                            |
| **BIGINT**        | 8 bytes      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 0 to 18,446,744,073,709,551,615   | Largest integer type, for very large numbers.                        |
| **BOOLEAN/BOOL**  | 1 byte       | 0 (false) or 1 (true)                                   | N/A                               | Synonym for TINYINT(1), used for true/false values.                  |
| **DECIMAL**       | Varies       | Depends on precision and scale                          | Depends on precision and scale    | Exact fixed-point numbers, ideal for financial calculations.         |
| **FLOAT**         | 4 bytes      | Approximate, depends on precision                       | Approximate, depends on precision | Single precision floating-point number.                              |
| **DOUBLE**        | 8 bytes      | Approximate, depends on precision                       | Approximate, depends on precision | Double precision floating-point number, more accurate than FLOAT.    |
| **BIT**           | Varies       | N/A                                                     | N/A                               | Stores bit-field data, size depends on the number of bits specified. |

All numeric types can be declared as SIGNED or UNSIGNED to adjust their range (default is SIGNED). Choose the type based on storage efficiency and numerical range requirements.

Example of INT Signed and Unsigned:

- `INT SIGNED`: Range from -2,147,483,648 to 2,147,483,647
- `INT UNSIGNED`: Range from 0 to 4,294,967,295

```sql
CREATE TABLE example_numbers (
    id INT UNSIGNED PRIMARY KEY,
    signed_int INT SIGNED,
    small_value SMALLINT,
    large_value BIGINT,
    price DECIMAL(10,2),
    rating FLOAT,
    precise_value DOUBLE,
    is_active BOOLEAN,
);
```
