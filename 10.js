// ====================EVENTS====================
function fun(){
    alert("chipichipi no chapa chapa")
}


function sum(){
    let a=parseint(prompt("enternum"))
    let b=parseint(prompt("enternum"))
    let c=a+b
    alert(c)
}



function no(){
    document.getElementById('res').textContent="bottom text"
}


// Q. write a program to create a counter with + and - buttons where the minimum value is 0
let count=0
function less(){
    if(count>0){
count--
document.getElementById('zero').textContent=count   
}}

function more(){
    count++
    document.getElementById('zero').textContent=count
}
function reset(){
    count=0
    document.getElementById('zero').textContent=count

}






let b = document.body


function color1(){
    b.style.backgroundColor="red"
}
function color2(){
    b.style.backgroundColor="blue"
}
function color3(){
    b.style.backgroundColor="yellow"
}
function color4(){
    b.style.backgroundColor="green"
}
function color5(){
    b.style.backgroundColor="purple"
}


function color(a,b,c,d,e){
    document.body.style.backgroundColor=a
    b.style.backgroundColor="blue"

}
