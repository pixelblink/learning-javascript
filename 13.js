// ============form handling============
// showing form input in alert bar
function storedata(){
    let n=document.getElementById('name').value
    let m=document.getElementById('city').value
    let p=document.getElementById('age').value
    // alert(n+" "+m+" "+p)
    console.log(n+" "+m+" "+p);
    document.getElementById('h1').textContent=n+" "+m+" "+p

    return false //prevents the page to refresh after program submission

}

