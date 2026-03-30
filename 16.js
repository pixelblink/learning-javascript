// localstorage
//  it is used to store some data in user's browser
//  setItem(), getItem(), removeItem(), clear()
//  formate -> key and value


// setItem()

// localStorage.setItem("data","name")
// localStorage.setItem("person","code")


// getItem()

// let n=localStorage.getItem("person")
// document.write(n)


// removeitem() 
// used to remove only one key&value

// localStorage.removeItem("data")


// clear() 
// used to clear every key&value from local storage

// localStorage.clear()


/*Q1. make a form of 5 fields with a submit button 
     when pressed the data will be stored in lostorage 
     and also opens a new html page with the filled data on it
     with a delete button, when clicked the data from
     the local storage gets deleted along with the 
     submitted data shown on the 2nd page*/


// function dalit(){
// localStorage.clear()
// }


function storedata(){
    let n=document.getElementById('name').value
    let c=document.getElementById('city').value
    let a=document.getElementById('age').value
    let p=document.getElementById('place').value
    let d=document.getElementById('day').value

    localStorage.setItem("username",n)
    localStorage.setItem("usercity",c)
    localStorage.setItem("userage",a)
    localStorage.setItem("userplace",p)
    localStorage.setItem("day",d)
}

let nm=localStorage.getItem("username")
let ct=localStorage.getItem("usercity")
let ag=localStorage.getItem("userage")
let pl=localStorage.getItem("userplace")
let day=localStorage.getItem("day")


document.getElementById('h1').innerHTML=(nm)
document.getElementById('h2').innerHTML=(ct)
document.getElementById('h3').innerHTML=(ag)
document.getElementById('h4').innerHTML=(pl)
document.getElementById('h5').innerHTML=(day)




function dalit(){
    localStorage.clear()

document.getElementById('h1').innerHTML=""
document.getElementById('h2').innerHTML=""
document.getElementById('h3').innerHTML=""
document.getElementById('h4').innerHTML=""
document.getElementById('h5').innerHTML=""
}