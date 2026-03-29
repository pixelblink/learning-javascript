//  ============Form Validation============

function validate(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let city= document.getElementById('city').value
    let contact_no = document.getElementById('contact_no').value

    if (name==""){
        alert("please enter your name")
        document.getElementById('name').focus() //focus function makes the cursor focus on the empty field after alert
        // variable se access iss liye nhi kiya kyoki,
        // stored variable walis script value ko target krr rhi h, toh uss se focus function kaam nhi krega if field is empty
        return false
    }
    else if (age==""){
        alert("please enter your age")                                                                          
        document.getElementById('age').focus()
        return false
    }
    else if (isNaN(age)){
        alert("please enter your age in numbers")                                                                          
        document.getElementById('age').focus()
        return false
    // task1
        if (age<=0){
            alert("please enter your real age in positive")                                                                          
            document.getElementById('age').focus()
            return false
        }
        else if (age<=100){
            alert("please enter your real age not more than 100 years")                                                                          
            document.getElementById('age').focus()
            return false
        }}

    else if (city==""){
        alert("please enter your city")
        document.getElementById('city').focus()
        return false
    }
    // task2
    else if (contact_no==""){
        alert("please enter your contact_no")
        document.getElementById('contact_no').focus() 
        return false
        if (isNaN(contact_no)){
        alert("please enter your contact_no")
        document.getElementById('contact_no').focus() 
        return false
    
        if (contact_no.length=10){
            alert("please enter your contact_no of 10 digits")
            document.getElementById('contact_no').focus() 
            return false
        }
    }
}
}
// task:-
// age not more than of 3 digits and below 0
// contact number should be 10 digits only not more not less