// primitive(value)

const { captureOwnerStack } = require("react");

// 7 types:String,Number,Boolean,null,undefined,Symbol.Bigint
const id=Symbol("123");
//Bigint datatype== undefined

const anotherid=Symbol("123")//symbol
//console.log(id===anotherid);//false
// reference(non primitive)
//Array,objects,functions
const heroes=["shaktiman","naagraj","doga"]
let myobj=
{//object
    name:"hitesh",age: 22
}
const myfunction=function(){
    console.log("hello world");//function

}
console.log(typeof myobj)
//nonprimitive all function datatype




//   *****************************  
//stack(primitive)  , heap(nonprimitive)
 let myyoutubename="hiteshchoudhary.com"
 let anthername=myyoutubename
 anothername="chaiaurcode"
 console.log(myyoutubename);
 console.log(anothername);
 let userone={
    email:"user@google.com"
 }
 let usertwo=userone;
 usertwo.email="hitesh@gmail.com";
 console.log(userone.email);
 console.log(usertwo.email);