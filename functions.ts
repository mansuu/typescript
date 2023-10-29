
/**
 * named function with an optional parameter
 * @param num1 
 * @param num2 
 * @param num3 optional parametr
 * @returns 
 */
function add(num1 : number, num2 : number, num3?:number) : number {
    return num3 ? num1+num2+num3 : num1 + num2
}

console.log("Adding 2 numbers", add(1, 3))
console.log("Adding 3 numbers", add(1, 3, 5))



/**
 * Arrow function
 * @param num1 
 * @param num2 
 * @param num3 required parameter, default value will be 2 if nohing passed
 * @returns number
 */
const subtract = (num1 : number, num2 : number, num3 : number = 2) : number => num1 - num2 - num3
console.log("Subtract 2 values", subtract(3, 4))
console.log("Subtract 3 values", subtract(3, 4, 1))
/**
 * Another way
 * @param num1 
 * @param num2 
 * @param num3, Rest parameters will be an array of rest values
 * @returns 
 */
const mult = function(num1:number, num2 : number, ...num3 : number[]) : number {
    return num1 * num2 * num3.reduce((a, b) => {
        return a+b
    })
}

console.log("Multiply function with rest parametrs", mult(2, 3, ...[4, 5, 6]))