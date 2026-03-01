// ====================ARRAY====================

// it is a collection of multiple tyoes of data
// represented by square brackets []
// it uses indexing to tell the address of element and it starts with 0


// let data=[1,"zzz",7.1]
// for(let pr=0; pr<=data.length; pr++){
//     console.log(data[pr]); 
// }

// let p=[]

// for( let prr=0; prr<5; prr++){
//     p[prr]=prompt("give total of 5 data")
// }
// console.log(p)


//  Q1. wap to print a sum of all elements between 8 to 1

// let task=[8,7,6,5,4,3,2,1]
// let sum=0
// for(let hi=0; hi<8; hi++){
//     sum=sum+task[hi]
// }
// console.log(sum);


//  joining elements of arrays using "spread operator" ========...========

// let ar1=[1,2,3,4]
// let ar2=[5,6,7,8,9,0]
// let ar3=[...ar1,...ar2]
// console.log(ar3);

// destructing of array

// let [name,age,city,height]=["person", 55, "bhopal",5.5]
// console.log(name)

// let [name,age, ,height]=["person", 55, "bhopal",5.5] // if you dont want to store ay element then just leave the space empty
// console.log(height)






// push, pop, unshift, shift, slice, splice


// let ar=[]


// ar.shift()
// console.log(ar);

// slice

// let stu=["person","unmarried",18,"40kg","indore"]

// console.log(stu);

// let stu2=stu.slice(1,4)

// console.log(stu2);



let stu=["person","unmarried",18,"40kg","indore"]

// stu.splice(index no, no of elements) to delete element

// stu.splice(index no, no of elements, element to be added) to add element

stu.splice(2,2)
console.log(stu);

stu.splice(2,0,"orange")
console.log(stu)



