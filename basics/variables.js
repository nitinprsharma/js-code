const accountId = 14235
let accountEmail = "nitinsharma@google.com"
var accountPassword = "123456"
accountCity = "Noida"
let accountState;
// accountId = 34   not allow because it's a const value

accountEmail = "ram@google.com"
// var accountPassword = "676767"    
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])