// array
const myArr=[0,1,2,3,4,5]
console.log(myArr[0])
const heroes=["Batman","joker"]


const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);


// Array methods

myArr.push(6)
console.log(myArr)
//myArr.pop()

myArr.unshift(9)//add 9 in start
myArr.shift();// removes 9 from start


console.log(myArr.includes(9));// false boolean
console.log(myArr.indexOf(9));// -1 number


const newArr=myArr.join();

console.log(myArr);//[0,1,2,3,4,5]
console.log(newArr);//0,1,2,3,4,5



//slice,splice


console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);//[1,2]
console.log("B",myArr);//[0,1,2,3,4,5]


const myn2=myArr.splice(1,3)
console.log(myn2);//[1,2,3]
console.log("C",myArr);//[0,4,5]