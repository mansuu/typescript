"use strict";
/** ----------- String---------- */
let f_name = "Himanshu";
let l_name = "Srivastava";
let full_name = f_name.concat(" ").concat(l_name);
console.log("-----FULL NAME------", full_name);
/**-------Boolean-------------------------------- */
let isValid;
/** Default value is not assigned to boolean in typescript
 * typescript code is compiled to javascript and it does not know anything about the type
 *  below statement will print undefined
 */
console.log("----- print boolean without assigning any value", isValid);
isValid = true;
console.log("----- print boolean after assigning any value", isValid);
/** ------------------------Array------------------------
 * there are two ways to create an array
 */
let numberList = [1, 2, 3, 4, 5, 6, 7];
let nameList;
nameList = ['Himanshu', 'Json', 'Kate'];
/** reduce function on array */
let total = numberList.reduce((acc, num) => {
    return acc + num;
});
console.log("-------Total sum of values------", total);
let s = 1 /* Status.pending */;
let s2 = 0 /* Status.open */;
