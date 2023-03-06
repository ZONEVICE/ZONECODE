namespace Validations {

    // Can be accessed outside.
    export const ValidateText = (text: string): boolean => text.length > 3
    // Cannot be accessed outside.
    const ValidateDate = (date: Date): boolean => !isNaN(date.valueOf())

}

console.log(Validations.ValidateText('hello world')) // true