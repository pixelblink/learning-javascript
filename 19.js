// Q. make 5 script files of + - * / % respectively then impport them into the main js file to perform tasks
// first two are to be imported by default import and latter 3 are to be imported by named import


import sum from './19one.js'
import sub from './19two.js'
import {mul} from './19three.js'
import {div} from './19four.js'
import {mod} from './19five.js'


let op = prompt("enter what operation you want to perform on two numbers out of + - * / %")
let a = parseInt(prompt("enter 1st number"))
let b = parseInt(prompt("enter 2nd number"))


if (op==="+") {
    console.log(sum(a,b));
}
else if (op==="-"){
    console.log(sub(a,b));
}
else if (op==="*"){
    console.log(mul(a,b));
}
else if (op==="/"){
    console.log(div(a,b));
}
else if (op==="%"){
    console.log(mod(a,b));
}
else{
    console.log("put correct operator out of + - * / %");
}
