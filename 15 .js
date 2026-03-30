function validate(){
    
let email = document.getElementById('email').value
let name = document.getElementById('name').value
let pass = document.getElementById('password').value
let cpass = document.getElementById('cpassword').value

if(name == ""){
    alert("please enter your name")
    document.getElementById('name').focus()
    return false
}
else if(email == ""){
    alert("Please enter email")
    document.getElementById('email').focus()
    return false
}
// ! --> if not matches
else if( !(email.includes('gmail.com'))){
    alert("Please enter valid email")
    document.getElementById('email').focus()
    return false
}
else if( !(pass.match(/[~`!@#$%^&*_+]/))){
    alert("Please enter atleast one specific character")
    document.getElementById('password').focus()
    return false
}

else if(cpass == ""){
    alert("please enter password")
    document.getElementById('cpass').focus()
    return false
}

else if(cpass!=pass){
    alert("password mismatch")
    document.getElementById('cpass').focus()
    return false
}
}