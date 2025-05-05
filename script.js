console.log(100 + 100);

let age = 30;
console.log("testing the age of someone to be below: ")
console.log(age)


//PRIMITIVE DATA TYPES
var salt = "NaCl";
let sugarContainer = "sugar";
const maggi = "maggi"; //constant string
const days = 20; //number
let check //undefined
let see = null   //null
console.log("Print null variable see");
console.log(see);
console.log("Print undefined variable check");
console.log(check)

//NON-PRIMITIVE DATA TYPES
let carton = ["bottle", 15_000, "detergent", "plate", true, null, {name: "James"}, 'a'];
console.log("Try printing an array below");
console.log(carton);
const studentData = {Name: "James", email: "james@yahoo.com", phoneNo: "+4413035932", gender: "M", result: ['a', 'b', 'c', 'a', 'a']};
console.log("Try printing an object");
console.log(studentData);
//Increment
let division = 10 / 2;
console.log("Try printing variable division");
console.log(division);
console.log("Print division again with increment++");
division++;
console.log(division);
let plus = 2;
plus++;


console.log(salt)
console.log(sugarContainer)
console.log(maggi)
console.log(check)
console.log(total)
console.log(cal)
console.log(plus)
console.log(see)
console.log(box)
console.log(box[4])

//OPERATORS IN JAVASCRIPT
//Arithemetic operators
let a = 34;
let b = 56;

const sum = a + b;       //Addition
console.log(sum);

const sub = a - b;
console.log(sub);        //subtraction

const divi = b / a;
console.log(divi)       //division

const multi = a * b;
console.log(multi)       //multiplication

const mod = b % a;
console.log(mod);        //modulus



//Assignment operator
let x = 39;
// +=
// -=

//Comparism operators... used to compare two values and return a boolean result
const y = 45
const z = 67
const g = "45"

console.log(y == z);
console.log(z > y);
console.log(z < y);
console.log(y <= z);
console.log(y >= z);       //grater than or euals to
console.log(z != y);      //not euals to
console.log(y === g)   //strictly equals to


//Logical Operators...
// logical OR    
// logical NOT   !
// logical AND   &
const fee = true;
const uniform = false;
const textbooks = false;
const id = true;

const checkOR = fee || uniform || id || textbooks;
console.log(checkOR);
const checkAND = fee && textbooks && uniform && id;
console.log(checkAND)
const checkAyo = (fee && id) || uniform
console.log(checkAyo)


//Uniary Operator
//Increment ++
//Decrement --
let k = 3;
k++;
console.log(k)
k--;
console.log(k)


//Tenary Operator.... compares two expressions and give a result on how you want to modify it
//(condition) ? "" : ""
const tenTest = 23 > 45 ? "Yes, this is true" : "No, this is quite wrong";
console.log(tenTest);

let anotherAge = 30;
let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote"
console.log(voting)