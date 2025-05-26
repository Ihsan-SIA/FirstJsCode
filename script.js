// console.log(100 + 100);

// let age = 30;
// console.log("testing the age of someone to be below: ")
// console.log(age)


// //PRIMITIVE DATA TYPES
// var salt = "NaCl";
// let sugarContainer = "sugar";
// const maggi = "maggi"; //constant string
// const days = 20; //number
// let check //undefined
// let see = null   //null
// console.log("Print null variable see");
// console.log(see);
// console.log("Print undefined variable check");
// console.log(check)

// //NON-PRIMITIVE DATA TYPES
// let carton = ["bottle", 15_000, "detergent", "plate", true, null, {name: "James"}, 'a'];
// console.log("Try printing an array below");
// console.log(carton);
// const studentData = {Name: "James", email: "james@yahoo.com", phoneNo: "+4413035932", gender: "M", result: ['a', 'b', 'c', 'a', 'a']};
// console.log("Try printing an object");
// console.log(studentData);
// //Increment
// let division = 10 / 2;
// console.log("Try printing variable division");
// console.log(division);
// console.log("Print division again with increment++");
// division++;
// console.log(division);
// let plus = 2;
// plus++;


// console.log("Try printing the salt we declared earlier");
// console.log(salt);
// console.log("Try printing sugar earlier declared");
// console.log(sugarContainer)
// console.log("Try printing maggi const earlier declared");
// console.log(maggi)

// //OPERATORS IN JAVASCRIPT
// //Arithemetic operators
// let a = 34;
// let b = 56;
// console.log("Try printing the sum of a and b variables earlier declared");
// const sum = a + b;       //Addition
// console.log(sum);

// console.log("Try printing the difference of a and b variables earlier declared");
// const sub = a - b;
// console.log(sub);        //subtraction

// console.log("The other operators sha, like * and / and mod, yktv!");

// //Assignment operator
// let x = 39;

// //Comparism operators... used to compare two values and return a boolean result
// const y = 45;
// const z = 67;
// const g = "45";

// console.log("Check if y=45 is same as z=67");
// console.log(y == z);
// console.log("Check if z=67 is greater than y=45");
// console.log(z < y);
// console.log("Check if y=45 is less than or equal to z=67");
// console.log(y <= z);
// console.log("Check if y=45 is not equal to z=67");
// console.log(z != y);      //not euals to
// console.log("Check if y=45 is strictly equal to g=45");
// console.log(y === g)   //strictly equals to


// //Logical Operators...
// // logical OR    
// // logical NOT   !
// // logical AND   &
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const id = true;

// const checkOR = fee || uniform || id || textbooks;
// console.log("checkOR = fee || uniform || id || textbooks");
// console.log(checkOR);
// console.log("checkAND = fee && textbooks && uniform && id");
// const checkAND = fee && textbooks && uniform && id;
// console.log(checkAND);
// const checkAyo = (fee && id) || uniform;
// console.log("checkAyo = (fee && id) || uniform");
// console.log(checkAyo);


// //Tenary Operator.... compares two expressions and give a result on how you want to modify it
// //(condition) ? "" : ""
// const tenTest = 23 > 45 ? "Yes, this is true" : "No, this is quite wrong";
// console.log('The operation done: 23 > 45 ? "Yes, this is true" : "No, this is quite wrong"');
// console.log(tenTest);

// let anotherAge = 30;
// let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
// console.log('Operation done: age < 100 && age >= 18 ? "You can vote" : "You cannot vote"');
// console.log(voting);





// //CONDITIONAL STATEMENT
// //if statement
// let s = 25;
// let p = 59;
// console.log("")
// if(s < p){
//     console.log("The Second value is the greatest")
// }


// //if else statement    -It display if the condition is true and else display false when the condition is false
// if(s > p){
//     console.log("The second value is the greatest");
// } else {
//     console.log("The second value is the lowest")
// }

// let DBpass = "sam12345";
// let password = "sam2334";
// if (password === DBpass){
//     console.log("Logged in sucessfully");
// }else{
//     console.log("Incorrect password");
// }
// //prompt
// let name = prompt("enter your name");
// console.log(name);
// //alert
// alert(`Welcome! ${name}`)

// const test = 100;
// console.log(`Your lucky number is ${test}`)

// let valueOne = parseInt(prompt("Your first number"));
// let valueTwo = parseInt(prompt("Your second number abeg"));
// let ans = valueOne + valueTwo;
// alert(ans);



// //if else if statement     -Allows you set more than 1 condition




// //Exercise List
// //write a program that determines whether a given number is positive or negative
// // let number = parseInt(prompt("Enter a Number"));
// // if (number > 0) {
// //     alert(``)
// // }

// //write a program that checks if a number is even or odd
// let number = parseInt(prompt("Enter a number"));
// if (number % 2 == 0){
//     alert("Your number is even")
// } else {
//     alert("Your number is odd")
// }



// alert("Welcome to Ihsan website chief");
// let checkedNo = parseInt(prompt("Enter a first number:"));
// if (checkedNo %2 == 0)
// {
//     alert(`Your number ${checkedNo} na even no bros`);
// }
// else
// {
//     alert(`Your number ${checkedNo} na odd boss, thanks for coming`);
// }


let header = document.getElementById('one');
const change  = ()=>{
    header.innerHTML = 'Usman';
}