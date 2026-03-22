// DOM(document object model)
// it is used to alter or change html element using javascript
// and everything in DOM is an object

let a1=document.getElementById('head1')
console.log(a1);

let a2=document.getElementById('head2')
console.log(a2);

let a3=document.getElementById('head3')
console.log(a3);

let a4=document.getElementById('head4')
console.log(a4);

let a5=document.getElementById('head5')
console.log(a5);

let a6=document.getElementById('head6')
console.log(a6);


// ID works only on single elements it targets single element and returns the same
// class and tag are used to return multiple elements at once and it returns those multiple element as array 


let hi=document.getElementsByClassName('head')
console.log(hi);


let para=document.getElementsByTagName('p')
console.log(para);

// changing content of html tag using DOM

// textcontent
// it just changes the text and if you try to put tags in it, they also get printed as text only
let h=document.getElementById('new')
h.textContent="<i> text has been changed </i>"

// innerHTML
// it targets the wholse line, thus allows you to change the tags alongwith the text within them
let hh=document.getElementById('newnew')
hh.innerHTML="<i> text has been changed </i>"





// -----------------------------------------------------------------------------------------

