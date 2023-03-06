// Use this syntax.

// Name of the library:
//  vvv
// Item imported from library:
//       vv
use std::io;

// To import all items use *:
//       v
use std::*;

// To import from external library
// use same syntax:
use rand::Rng;

/* If using an external library you must
add it to the cargo.toml file like so:

cargo add {<library to add in this case rand>} ->

[dependencies]
rand = "0.8.5"

Source of rand: https://crates.io/crates/rand */

// To import multiple items in one single line:
use std::io::{Write, BufReader, BufRead, ErrorKind};

fn main(){
    print!("Hello world!");
}