const name="hitesh"
const repocount=50
//console.log(name+repocount+"value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gamename=new String("hi-tes-h-hc")
console.log(gamename[0]);
//console.log(gamename.__proto__);
//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//console.log(gamename.charAt());//2
//console.log(gamename.indexOf('t'));


const newString=gamename.substring(0,4);
//console.log(newString);

const anotherString=gamename.slice(-7, 4);
console.log(anotherString);

const newStringone="  hitesh  "
console.log(newStringone);
console.log(newStringone.trim());

const url="https://abhishek.com/abhishek%20prasad"
console.log(url.replace('%20','-'))

console.log(url.includes('abhishek'))
console.log(gamename.split('-'));