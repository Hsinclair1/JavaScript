//print to console
//console.log("hello");
//console.log(4+4);

//variables
//var total = 10.0;
//console.log("£"+total);

//alerts and prompts
//alert("welcome to the page");
//alert(`Welcome ${prompt("Enter your name:")}`)

//var num1;
//var num2;
//alert(`${num1 = parseInt(prompt("Enter your first number"))} + ${num2 =parseInt(prompt("Enter your second number"))} = ${num1 + num2}`);

//access and change html
//document.getElementById("msg").innerHTML = "hello";
//document.getElementById("timer").innerHTML = "hi";
//use time to set message 
//var today = new Date();
//var hourNow = today.getHours();
//var greeting;

//if (hoursNow > 18) {
//    greeting = "Good Evening";
//} else if (hourNow > 12) 
//{
//    greeting = "Good Afternoon";
//} else if (hourNow > 0) {
//    greeting = "Good morning";
//} else {
//    greeting = "Welcome";
//}

//document.getElementById("timer").innerHTML = "hi";

function CalculateCost() {
    var sign = document.getElementById("user").value;
    var length = sign.length;
    var subtotal = length * 2.99;
    var shipping = length * 0.99;
    var total = shipping + subtotal;
    document.getElementById("userSign").textContent = sign;
    document.getElementById("tiles").textContent = length;
    document.getElementById("subtotal").textContent = `£${subtotal.toFixed(2)}`;
    document.getElementById("shipping").textContent = `£${shipping.toFixed(2)}`;
    document.getElementById("total").textContent = `£${total.toFixed(2)}`;
}
