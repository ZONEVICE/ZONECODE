(() => {

    interface IAddTwoNumbers {
        (a: number, b: number): number;
    }

    let AddNumbersFunction: IAddTwoNumbers;

    AddNumbersFunction = (a: number, b: number) => {
        return a + b
    }

    // console.log(AddNumbersFunction(5, 5)) // => 10


})();