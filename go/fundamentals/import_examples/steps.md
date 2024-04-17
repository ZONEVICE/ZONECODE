On this pwd write:


```bash
go mod init import_examples
```

This creates a file called `go.mod` where it indicates this project is a module it seems.

A folder called `misc` is created where `.go` files which have functions imported at `main.go`

Then just run

```
go run .
```

Which automatically looks for the `main.go` file with `package main` flag.