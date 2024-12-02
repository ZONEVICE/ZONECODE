# cargo check

cargo check is a command in Rust's Cargo package manager that checks the syntax and type correctness of a Rust project without generating an executable binary file.

# cargo run

Compile and runs Rust application.

# cargo clean

Removes the target folder so it remains without older compile files.

# cargo build [--release]

cargo build is a command in Rust's Cargo package manager that builds a Rust project and generates an executable binary file.

By default, cargo build generates a debug version of the binary file with additional debugging information. To generate an optimized release version of the binary file, use cargo build --release. This will optimize the compiled code for performance and generate a smaller binary file in the target/release/ directory

# cargo new <name_of_project> [--bin]

cargo new is a command in Rust's Cargo package manager that creates a new Rust project with the specified name and directory structure. Use modifier `name` at the end to give name to the project.


`--bin` states to create a new application. Not a library.

# cargo update

cargo update is a command in Rust's Cargo package manager that updates the dependencies of a Rust crate to their latest versions.

# cargo doc --open

cargo doc --open is a command in Rust's Cargo package manager that generates documentation for a Rust crate and opens it in the default browser after building it.

# cargo --version

Checks the current version of Cargo.