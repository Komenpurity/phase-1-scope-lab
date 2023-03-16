// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    let result = console.log(customerName.toUpperCase());
    return result;
} 
upperCaseCustomerName();

var bestCustomer = "not bob";

const leastFavoriteCustomer= "mike";

function setBestCustomer(){
  let result = bestCustomer = "maybe bob";
  return result;
}
setBestCustomer();



function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
overwriteBestCustomer();


function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "mark";
}
changeLeastFavoriteCustomer();