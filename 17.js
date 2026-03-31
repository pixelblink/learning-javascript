// storing object and array as key on localstorage
// local storage can only store string type data

let person={
    name:"vyakti",
    age:23,
    city:"bhopu",
    contactn:12345678
}
// JSON.stringify() is used to convert object and arrays into string datatype
localStorage.setItem("userdata",JSON.stringify(person))

//JSON.parse() converts data into its original form
let val = localStorage.getItem("userdata")
let fn = JSON.parse(val) //converts data into original
console.log(fn)
console.log(fn.contactn) //accesssing specific key from localstorage 


