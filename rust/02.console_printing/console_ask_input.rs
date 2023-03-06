// use std::io::stdin;

fn main(){
    println!("What is your name?");
    let mut name: String = String::new();

    io::stdin().read_line(buf: &mut name);

    println!("Your name is: {}", name)
}