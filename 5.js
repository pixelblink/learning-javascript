// ==================OBJECT================== 
// it is used for storing multiple data in a single variable, using key value
// unordered form
// it is denoted by urly braces {}

//  syntax  {key : value1, value2, value3...}

// let obj = {name:"person", age:55, hello:"hi",
//     bank:{name:"SBI", ac_no:100, ac_bal:12000},
//     arrey_yaar:[nig1, nig2, nig3, nig4]
// }
// console.log(obj) //to access whole object
// console.log(obj.hello) // to access specific value
// console.log(obj.bank); // to access key object inside an object
// console.log(obj.arrey_yaar); //to access array in an object


// to take input from user to store in an object

// let emp = {
//     emp_name:prompt("enter name"),
//     emp_age:prompt("enter age"),
//     emp_city:prompt("enter city"),
// }
// console.log(emp);


// to print keys only, not data in it just the key name for the sake of god omg

// let hello={
//     hi:123,
//     byee:1234,
//     bee:134,
// }
// for(let k in hello){
//     console.log(k);
    
// }

// Types of notation in objects bracket[] notation and dot. notation

// dot. is used for accessing keys objects arrays inside an object without space
// bracket[] is used to access key with space with them


// let haha={
//      name1:"haha",
//      "name 2":"heha"
// }
// console.log(haha[name1]);


// let ob={
//      name:"abc",
//      age:11,
// }

// for(let l in ob){
//      if(k=="name"){
//      console.log(l);
//      }
// }

// let k=Object.keys(ob)
// console.log(k[0]);
// let v=Object.values(ob)
// console.log(v[0]);



// Destructring of object

// let {name, city, cartoon, hello}={
//      name:"code",
//      city:"bhopal",
//      cartoon:"kon cartoon",
// }
// console.log(cartoon);
// console.log(hello);

// spread operator same as array also works here

let obj={
     name:"code",
     city:"bhopal",
     cartoon:"kon cartoon",
}
let ob={
     nae:"coe",
     ciy:"bhoal",
     carton:"kon catoon",
}

let joint={...obj,...ob}
console.log(joint);
