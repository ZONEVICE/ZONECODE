| Data Type         | Maximum Size             | Description                                                                                |
| ----------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| `CHAR(size)`      | 255 characters           | Fixed-length string, space-padded if shorter than declared size.                           |
| `VARCHAR(size)`   | 65,535 characters        | Variable-length string, limited by row length and character set.                           |
| `BINARY(size)`    | 255 bytes                | Fixed-length binary string for storing byte data.                                          |
| `VARBINARY(size)` | 65,535 bytes             | Variable-length binary string for storing byte data.                                       |
| `TINYTEXT`        | 255 characters           | Small variable-length text string.                                                         |
| `TEXT`            | 65,535 characters        | Standard variable-length text string.                                                      |
| `MEDIUMTEXT`      | 16,777,215 characters    | Medium-sized variable-length text string.                                                  |
| `LONGTEXT`        | 4,294,967,295 characters | Large variable-length text string (up to 4GB).                                             |
| `ENUM`            | 255 values               | String object with predefined set of values.                                               |
| `SET`             | 64 items                 | String object allowing multiple values from a predefined set.                              |
| `JSON`            | 4,294,967,295 characters | Stores JSON (JavaScript Object Notation) data, engine checks if valid JSON format is used. |
