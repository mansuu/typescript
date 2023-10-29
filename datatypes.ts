/** ----------- String---------- */
let f_name : string = "Himanshu"
let l_name  :string ="Srivastava"
let full_name = f_name.concat(" ").concat(l_name)
console.log("-----FULL NAME------", full_name);

/**-------Boolean-------------------------------- */

let isValid : boolean;
/** Default value is not assigned to boolean in typescript
 * typescript code is compiled to javascript and it does not know anything about the type
 *  below statement will print undefined 
 */
console.log("----- print boolean without assigning any value", isValid)

isValid = true;
console.log("----- print boolean after assigning any value", isValid)

/** ------------------------Array------------------------
 * there are two ways to create an array
 */

let numberList : number[] = [1, 2, 3, 4, 5, 6, 7]

let nameList : Array<string>;
nameList = ['Himanshu', 'Json', 'Kate']
/** reduce function on array */
let total = numberList.reduce((acc, num) =>{
    return acc+num
})

console.log("-------Total sum of values------", total)

/** ------------------ Enums--------------------- */

/**
 * IF const is added it will optimize the enum declaration in production
 */
const enum Status  {
    open,
    pending,
    closed
}

let s : Status = Status.pending
let s2:Status = Status.open
