// hi
// loops
// do while, while, for, for in, for of, for each


// ================DO WHILE================


// Q.1  reverse number printing question

// let a = 5
// do {
//     console.log(a,);
//     a--
// } while (a>=1);



// Q.2 table printing question

// let num = parseInt(prompt("enter a number"))
// let loop=1
// do{
//     console.log(num*loop);
//     loop++
// } while(loop<=10);

// Q.3 keep taking input from user until user gives 0 as an input then terminate the loop

// do {
//   let input = parseInt(prompt("Enter a number, press 0 to stop"));
// } while (input !== 0);




// =================WHILE=================


// Q.1 printing "code" 15 times

// let x=1
// while (x<=15) {
//     console.log(x,"code");
//     x++
// }



// Q.2 wap to print sum of all digits between 10 to 1

// let sum = 0
// let num = 1
// while (num<=10) {
//     sum=sum+num
//     num++
// }
// console.log(sum);



// Q.3 wap to print square of all even numbers between 5 to 15

// let numb = 5
// while (numb<=15) {
// if (numb%2===0) {
//     let nice=numb*numb
//     console.log(numb, "squares to", nice);    
// }
// numb++;
// }



// Q.4 wap to print square of all numbers between 1 to 10


// let num = 1
// while (num<=10) {
//     let sqr=num*num
//     console.log(num, "squares to", sqr);
//     num++
// }




// =================FOR=================


// Q1. print table in reverse using forloop


// let num=5
// for (let i = 10; i >= 1; i--) {
//     console.log(num*i);
// }


// Q2. wap to print a number from 1 to 5 to print table or 6 to 10 to print square of all even numbers between 1 to 10 in reverse order

// let inpt= prompt(parseInt("enter number from 1 to 5 to print table or 6 to 10 to print square of all even numbers between 1 to 10"))

// if (inpt<=5) {
//     for(let i = 1; i<=10; i++) {
//       console.log(inpt*i);
      
// }
// }
// else if (inpt>=6 && inpt<=10){
//     for (let i = 10; i>=1; i--){
//       if (inpt%2===0) {
//             console.log(inpt*inpt);
//         }
//     }
// }
// else{
//   console.log("invalid input");
// }


// nested for loop

// for(let lou=2; lou<=3; lou++){
//   for (let i = 1; i<=10; i++) {
//     console.log(lou*i);
//   }
// }


// Q1. pattern printing

// for(let row=1; row<=5; row++){
//   for(let col=1; col<=row; col++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let row=1; row<=5; row++){
//   for(let col=1; col<=5; col++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let row=1; row<=5; row++){
//   for(let col=5; col>=row; col--){
//     document.write("*")
//   }
//   document.write("<br>")
// }





// Q2. use &nbsp
// *****
// *   *
// *   *
// *   *
// *   *
// *****


// let rows = 6;
// let cols = 5;

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= cols; j++) {
//     if (i === 1 || i === rows || j === 1 || j === cols)
//       document.write("*");
//     else
//       document.write("&nbsp;&nbsp;");
//   }
//   document.write("<br>");
// }



// Q3. 
// *****
//   *  
//   *  
//   *  
//   *  

// let row=5
// let col=5

// for(let a=1; a<=row; a++){
//   for(let b=1; b<=col; b++){
//     if (a===1 || b===3)
//       document.write("*")
//     else
//       document.write("&nbsp; &nbsp;")
//   }
//   document.write("<br>")
// }



for(let row=1; row<=5; row++){
  for(let col=1; col<=5; col++){
    if(row===1||row===5||col===1||col===5){
      document.write("*")
    }
    else{
      document.write("&nbsp;&nbsp;")
    }
  }
  document.write("<br>")
}