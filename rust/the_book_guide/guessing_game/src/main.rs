use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number.");

    // Generates a random number between 1 and 100.
    let secret_number = rand::thread_rng().gen_range(1..=100);

    // Two ways to print with a variable included.
    println!("The secret number is: {}", secret_number);
    println!("The secret number is: {secret_number}");

    loop {

        println!("Please input your guess.");

        // Creates a new variable. String type.
        let mut guess = String::new();

        // User input ask.
        io::stdin()
            .read_line(&mut guess) // Mutates the variable.
            .expect("Invalid input value."); // Error output.

        println!("You guessed: {guess}");

        // Shadows variable into an integer (u32) value of itself.
        // let guess: u32 = guess.trim().parse().expect("Only numbers allowed.");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        // Compares the generated number with the input number.
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => { 
                println!("You win!");
                break;
            }
        }
    }
}
