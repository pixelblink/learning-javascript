async function access(){
    let d = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    let res = await d.json() //json converting the string data back to its original form, which is array of object 

    console.log(res); //to print the whole data

    let naam = res.map((e)=>{return e.name}) //map function to access particular kind of data in this array of object 
    console.log(naam);


// Q. access data from api and show it in html table

let data = res.map((yahaPeJoVariableAssignHotaHaiWo_EventObject)=>`
<tr>
    <td>${yahaPeJoVariableAssignHotaHaiWo_EventObject.id}</td>
    <td>${yahaPeJoVariableAssignHotaHaiWo_EventObject.name}</td>
    <td>${yahaPeJoVariableAssignHotaHaiWo_EventObject.email}</td>
</tr>
`).join("<hr>")

document.getElementById('showdata').innerHTML=data



}
access()


// revise map and 
// Backtick(Template Literals) 

// const name = "Alice";
// console.log(`Hello, ${name}!`); // "Hello, Alice!"

// do the same work with another api

// map() 

// filter() returns the whole row of the data filtered
// for example you want to know details of people of bhopal so you filter bhopal and it returns the details of people having bhopal in their intel







// querySelector()
// works same as .getElementById(), as its a selector but doesnt return data in return array form as it targets only one thing
// it supports ID, CLASS, and TAG

// querySelectorAll()
// used to target multiple tags using class, tag and id and it stores data in array form as .getElementById()


let h=document.querySelector('#demo')
console.log(h);
