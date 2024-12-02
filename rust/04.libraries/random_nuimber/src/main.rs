use rand::Rng;

// cargo check to donwload library and check syntax
// cargo run to compile and run

fn main() {
    let mut rng = rand::thread_rng();
    let n1: u8 = rng.gen();
    println!("the random number is: {}", n1);
}
