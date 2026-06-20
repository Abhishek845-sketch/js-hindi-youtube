// Dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//let myCreatedDate=new Date(2023,0,23)// 0==jan
//let myCreatedDate=new Date(2023,0,23,5,3)// 0==jan
let myCreatedDate=new Date("01-14-2023")// 0==jan
//console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()


//console.log(myCreatedDate.getTime());
//console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newdate=new Date()

console.log(newdate.getMonth());
console.log(newdate.getDay());


newdate.toLocaleString('default',{ 
    weekday: "long"
})





