// 1. ways to print in javascript
//console.log("hello");    Most used
//alert("hello");
//document.write("hello");

// 2. JS console API (application programming interface)
// console.log("hello"); //Most used
// console.warn("hello");
// console.error("hello");

// 3. jS Varaibles
// varaibles - containers to store data values
// var x = 30;
// var y = 40;
// console.log(x + y);
//document.write(x + y);

// 4. Data types in JS
// number
//  var num1 =383;
//  var num2 = 773;
//  // String
//  var str1 = "this is a string";
//  var str2 = 'this is also string';

//  // Objects
//  var marks = {
//     ather: 43,
//     asif: 89,

//  }
//  console.log(marks);
//  // Booleans
//  var a = true;
//  var b = false;
//  console.log(a);

// At very hight level, there are two types of data types in JS
// 1. Primitive data types: 6 types :- undefined, null, Number, String, Boolean, Symbol.
// 2. Reference data types: Arrays and Object
// var arr = [1,2,"babu", 4,5];
// console.log(arr);

// Operators in js
// Arthematic operators  (+, -, *, /)
//  Assignment operators
// var c = b;
// c += 2;   (means c = c-2)
// c -= 2;     (means c = c+2)
// c /= 2;      (means c = c/2)
// c *= 2;       (means c = c*2)

// Comparision operators
// ( ==, >=, <=, <, >)

// Logical operators
// logical AND
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
//logical OR
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)
//Logical NOT
// console.log(!false); (it turns true in false)
// console.log(!true);

//Functions in JS
// function avg(a, b) {
//     c = (a+b)/2;
//     return c;
// }
// c1 = avg(40,50);
// c2 = avg(50,90);
// console.log(c1, c2);

//Conditionals in js
//Single if statement
// var age = 30;
// if(age > 18) {
//     console.log('you can vote');
// }
// //if-else statement
// if(age > 18) {
//     console.log('you can vote');
// }
// else {
//     console.log('you cant vote')
// }
/* if-else ladder
var age = 40;
if(age<5) {
    console.log('You are a kid');
}
else if(age>5) {
    console.log('You are not a kid');
}
else if(age>18) {
    console.log('you are mature');
}
else {
    console.log('you are man')
}
*/
// For loop
// var arr = [1,2,3,4,5,6];
// // for(i=0; i< arr.length; i++) {
// //     console.log(arr[i]);
// //}
// // this can be also coded as\
//  // this code provides same output but easy to use
// arr.forEach(function(element) {
//     console.log(element);
// })

/* While loop                               // while loop evalvates the condition first and the executes the statement 
var arr = [1, 2, 3, 4, 5, 6];
let j = 0;
 while(j<arr.length){n              
    console.log(arr[j]);
   j++;
 }
 */

/* // do while loop                 // do while loop executes the statement first before evaluating the condition
var arr = [1, 2, 3, 4, 5, 6];
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);
*/

// break
/*
var arr = [1,2,3,4,5,6];
for(i=0; i< arr.length; i++) {
    if(i==2){
        break;      // it is used to come out from iteration
    }
     console.log(arr[i]);
}
*/
// Continue
/*
for(i=0; i< arr.length; i++) {
    if(i==2){
        continue;      // it is used to cancel this iteration and continue another iteration
    }
     console.log(arr[i]);
} */

// let myArr = ["Fan", "Camera", 34, null, true ];
//Array methods
//console.log(myArr.length);    // it will print lenght of array i,e 5
/*
myArr.pop();          //removes last element of array
console.log(myArr);
*/
/*
myArr.push("Aasif");           // used to insert element
console.log(myArr); */
/*
myArr.shift();             //used to remove first element
console.log(myArr);
*/
//myArr.tostring()    converts array to string
//myArr.tosort()     for sorting
// many more array methods
//String methods in JavaScript
//  let myString = "Aasif is a good boy good good";
//  console.log(myString.length);               //to finf lenght of string
//  console.log(myString.indexOf("good"));         //to find index (it will always give first index)
//  console.log(myString.lastIndexOf("good"));      //to find last index
//  console.log(myString.slice(1,4));  // it will print index 1-3 i,e asi

// let result = myString.replace("Aasif", "Amir");     //To replace string
// let result = myString.replace(/good/g,"bad");    //global replacement
// console.log(result)


//Date Methods
/*let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
*/

//DOM manipulation   (DOM = document object model)

// let elem = document.getElementById('click');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container')
// console.log(elemClass);

// elemClass[0].style.background = "yellow"; //by this we can target elements to apply them CSS
// elemClass[0].classList.add("bg-primary");  //to add class
// elemClass[0].classList.add("text-sucess"); 


// elemClass[0].classList.remove("text-sucess"); //we can also remove class
// console.log(elem.innerHTML)     //used to read HTML
// console.log(elem.innerText)       // used to read text

// console.log(elemClass[0].innerHTML);    
// console.log(elemClass[0].innerText);

// // tag name
// tn = document.getElementsByTagName('div'); //used to get elements by tag name

// //to creat paragraph
// createdElement = document.createdElement('p');
// createdElement.innerText = "this is created paragraph";
// //tn[0].appendChild(createdElement);

//removeChild(element);     //removes an element


// Selecting using Query    [it is usefull in CSS]
// sel = document.querySelector('.container');   // it will give us container
// console.log(sel);

// sel = document.querySelectorAll('.container');   // it will give us all containers   
// console.log(sel);


// //we can use direct by HTML (e.g: <button id="click" onclick="clicked">Click Me</button>)
// function clicked() {
//     console.log('the button was clicked');
//   }  
//   window.onload = function() {
//     console.log('the document was loaded');
//   }


  //Events in JavaScript
//   firstContainer.addEventListener('click', function() {
//     console.log("click hua");     //when we click on container, the console will print click hua}
//   })

//   firstContainer.addEventListener("mouseover", function() {
//     console.log("mouse on container");    
//   })
//   firstContainer.addEventListener('mouseout', function() {
//     console.log("mouse out container");    
//   })
//   firstContainer.addEventListener('mouseup', function() {
//     console.log("mouse up when clicked on container");    
//   })
//   firstContainer.addEventListener('mousedown', function() {
//     console.log("mouse down container");    
//   })

// Arrow function

// function summ (a,b){
//     return a+b;
// }
//we can make same function with arrow function without writting function
//it is used to insect function in between anything
//  summ = (a,b)=>{
//     return a,b;
//  }

// anyFun = ()=> {
//       console.log("i am your anyFun")
// }
// //SetTimeout and setinterval
// // setTimeout(anyFun, 2000);        //(2000 milisecond ie 2sec)
// //if we want to do the same thing repeatedly 
// clr = setInterval(anyFun, 2000);
//in order to stop it we have to provide id(clr) and then clearinterval(clr) in console
// use clearInterval/clearTimeout to cancel setInterval/setTimeout

//javascript localstorage
// localStorage.setItem('name', 'Aasif');
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')

//JSON
//to convert obj to string // we can use typeof jso/obj in console
// obj = {name: "asif", length:1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso)
// //we can also
// console.log(typeof jso)
// parsed = JSON.parse('{name: "asif", length:1, a: {this: "that"}}')
// console.log(pased)
