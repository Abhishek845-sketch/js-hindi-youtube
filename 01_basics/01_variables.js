const accountId=144553
let accountemail="abhi@gmail.com"
var accountpassword="12345"
accountcity="asansol"
// accountId=2 // not allowed
console.log(accountId);
accountemail="hii@gmail.com"
accountpassword="3234"
accountcity="bengaluru"
let accountstate;
/*prefer not to use var because of issue in block scope and functional scope*/


console.table([accountId,accountemail,accountpassword,accountcity,accountstate])