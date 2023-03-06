// Generics.
import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics"
import { Hero, Villain } from "./interface"

/* printObject(123)
printObject("123")
printObject(new Date())
printObject({ a:1, b:2, c:3 })
printObject([1,2,3,4,5,6])
printObject('Hello World')
*/

console.log(genericFunctionArrow(3.14168).toFixed(2))
console.log(genericFunctionArrow('Hello world').toUpperCase())
console.log(genericFunctionArrow(new Date()).getFullYear())

const deadpool: any = {
    name: 'Deadpool',
    // realName: 'Wade Wilson',
    dangerLevel: 130
}

// If <TYPE> established  in function call, it has the priority
// to receive that kind of type.
console.log(genericFunctionArrow<Hero>(deadpool).realName)