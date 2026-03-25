// setInterval()
// syntax
// setInterval(function,time interval)

// setInterval(()=>{document.write("hello","<br>")}, 1000);


// clearinterval()
let v=0;
let st
function start(){
st=setInterval(() => {
   document.getElementById('count').textContent=v++
}, 100);
}

function stop(){
    clearInterval(st)
}

function reset(){
    v=0
    document.getElementById('count').textContent=v
    clearInterval(st)
}