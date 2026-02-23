//wap to program to take one input from the user . you have to perfom calculations based on input, when user give 1 in input so you have to perfrom addition of two numbers , 2 for sub ,3 for multiplication, 4 for division, otherwise print invalid , using ladder if else

a = parseInt(prompt("Enter 1st number"));
b = parseInt(prompt("Enter 2nd number"));
c = parseInt(prompt("yell me what you want me to do with da numbers"));

if(c==1){
    console.log(a+b);
}
else if(c==2){
    console.log(a-b);
}
else if(c==3){
    console.log(a*b);
}
else if(c==4){
    console.log(a/b);
}
else{
    console.log("invalid");
}




//wap to find grade of student according to percentage take 5 inputs(subject marks) then find percentage then print grade accordingly

accounts = parseInt(prompt("Enter accounts marks"))
business = parseInt(prompt("Enter business marks"))
economicsenglish = parseInt(prompt("Enter economicsenglish marks"))
english = parseInt(prompt("Enter english marks"))
hindi = parseInt(prompt("Enter hindi marks"))
total = accounts+business+economicsenglish+english+hindi;
console.log("Total marks ",total)
per = (accounts+business+economicsenglish+english+hindi)/5;

if (per>=90) {
    console.log(per, "Aih grade");
} 
if (per>=80 && per<90) {
    console.log(per, "Bih grade");
} 
if (per>=70 && per<80) {
    console.log(per, "Cih grade");
} 
if (per>=60 && per<70) {
    console.log(per, "Dih grade");
} 
else {
    console.log("you shall not passss");
}




//wap to take 3 int inputs from user and check 1 input is divisible by 3 or not . if it is divisible by three then find area of rectangle of 1 and 2 input . if not divisible then add all input and print it
a = parseInt(prompt("Enter 1st number"))
b = parseInt(prompt("Enter 2nd number"))
c = parseInt(prompt("Enter 3rd number"))

if(c%3==0){
    console.log("area of circle= ", a*b)
}
else{
    console.log("addition of 3 digits= ", a+b+c)
}