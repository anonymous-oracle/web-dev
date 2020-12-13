// HELLO WORLD SNIPPET 

// alert("hello world");
// console.log("hello world");
document.body.style.color = 'white';
document.body.style.backgroundColor = 'black';

// var myname = 'suhas';
// myname = 'ks';
// alert('my name is '+myname);
// var yourname = prompt('what is your name?');
// alert('welcome, '+yourname);

// // the string length function
// var limit = 100;
// var str = prompt('enter a string: ');
// alert('the length of the string you entered is: '+String(str.length) + '\nyou have '+String(limit - str.length)+' characters remaining');

// console.log(myname.slice(0,7));

// // meme verification
// var sum = '1'+'1';
// var diff = '11' - '1';
// console.log(sum);
// console.log(diff);

// var str = prompt('enter a string: ');
// alert('the entered string is: '+str.slice(0,100));

// var str = prompt('enter a string: ');
// alert('the entered string in upper case is: '+str.toUpperCase());


// var newname = prompt('enter your name: ');
// alert('hello '+ newname.slice(0,1).toLocaleUpperCase()+newname.slice(1,newname.toLocaleLowerCase().length));

// var dogage = prompt('enter the age of your dog: ');
// var humanage = ((dogage - 2) * 4) + 21;
// alert('the human age is: '+String(((dogage - 2) * 4) + 21));

// // // more meme verification
// alert('\n');
// alert('1'+1);
// alert('\n');
// alert(1+'1');

// // increment and decrement operators
// // both post- and pre- -increment and -decrement operators are available
// var x = 5;

// console.log('pre operation');
// console.log('original value: '+x);
// console.log('incremented value: '+String(++x));
// x--;
// console.log('decremented value: '+String(--x)+'\n');

// x++;
// console.log('post operation');
// console.log('original value: '+x);
// console.log('incremented value: '+String(x++));
// x--;
// console.log('decremented value: '+String(x--));


// // FUNCTIONS IN JAVASCRIPT
// function takeAWalk(){
//     alert('leave house');
//     alert('start walking...');
//     alert('return home after walking');
// }

// takeAWalk();

// function takeAWalkAndLogIt(){
//     console.log('taking a walk...');
//     console.log('leaving house');
//     console.log('started walking...');
//     console.log('returned home after walking');
// }

// takeAWalkAndLogIt();

// function takeAWalkforNMinutesAndLogIt(minutes){
//     console.log('taking a walk...');
//     console.log('leaving house');
//     console.log('started walking...');
//     console.log('returned home after walking for '+minutes+' minutes');
// }

// takeAWalkforNMinutesAndLogIt(45);

// function getMilk(money) {

//     // bottlesOfMilk = (money / 1.5) - (money % 1.5);
//     // return bottlesOfMilk
//     return (money / 1.5) - (money % 1.5);
    
// }
// var money = prompt('give the robot money to buy milk: ');
// alert('robot was able to get '+Math.floor(getMilk(money))+' bottles of milk');

// function getBMIinKgPerMetre2(weight, height) {
//     return weight/(Math.pow(height,2))
// }

// var bodyWeight = prompt('enter your body weight in kg: ');
// var heightInMetres = prompt('enter your height in metre: ')
// alert('your BMI is: '+getBMIinKgPerMetre2(bodyWeight, heightInMetres));


// // RANDOM NUMBER GENERATORS
// var yourname = prompt('enter your name');

// // multiplying by 100 and adding one to shift range from 0-99 to 1-100
// var chance = Math.floor((Math.random()*100) + 1)

// // IF-ELSE STATEMENT
// if (chance > 50) {
//     alert('wow, '+chance+' is a great score');
// }
// else if(chance===50){
//     alert('can go both ways, 50-50 :/');
// }
// else{
//     alert(chance+'...no luck here :(');
// }

// COMPARISON OPERATORS
// >=, <=: greater than equal to, less than equal to
// >, <: greater than, less than
// ===: is equal to; takes datatypes into consideration. Ex: 1==='1' -> false
// ==: is equal to; does not take datatypes into consideration. Ex: 1=='1' -> true
// !==: is not equal to; takes datatypes into consideration. Ex: 1!=='1' -> true
// !=: is not equal to; does not take datatypes into consideration. Ex: 1!='1' -> false

// LOGICAL OPERATORS
// &&: AND
// ||: OR
// !: NOT

// // leap year
// var year = prompt('enter a year: ');
// if(year % 4===0){
//     if(year%100===0){
//         if (year%400===0) {
//             alert(year+' is a leap year');
//         }
//         else{
//             alert('Not a leap year');
//         }
//     }
//     else{
//         alert(year+' is a leap year');
//     }
// }
// else{
//     alert('Not a leap year');
// }

// // ARRAY: can contain heterogenous datatypes like string and number datatypes in the same array
// var arr = [1, 2, 3, 4, 5];
// var num = Number(prompt('enter a number'));
// var found;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]===num) {
//         found=true;
//         break;
//     }
// }
// if (found){
//     alert('found '+num);
// }
// else{
//     alert(num+' not found');
// }

// // OR
// var arr = [1, 2, 3, 4, 5];
// var num = Number(prompt('enter a number'));

// if (arr.includes(num)){
//     alert('found '+num);
// }
// else{
//     alert(num+' not found');
// }

// // ARRAY MANIPULATION
// var output = [];
// output.push(1)
// output.push(2)
// console.log(output)
// var poppedElement = output.pop()
// console.log(poppedElement)

// // LOOPS (while)
// var i = 0
// while(i < 5){
//     console.log(i)
//     i++
// }

// // LOOPS (for)
// for (var i=0; i < 5; i++){
//     console.log(i)
// }

// // fibonacci generator:

// function fib(n) {
//     if (n<=1) {
//         return n
//     }
// var curr, prev
// curr = 1
// prev = 0
// var t;
// for (let index = 0; index < n - 1; index++) {
//     t = prev
//     prev = curr
//     curr = t + prev
// }
//     return curr
// }

// var num = Number(prompt('enter a number n to get the nth fibonacci number'))
// alert('the '+num+'th fibonacci number is '+fib(num));

// // JAVASCRIPT OBJECTS (like structs in C/C++)
// var person = {
//     name: 'xyz',
//     age: '24',
//     heightInFeet: '5.8',
//     weightInKg: '53',
//     gender: 'male',
// }

// // CONSTRUCTOR FUNCTIONS
// function PersonObject(name, age, heightInFeet, weightInKg, gender) {
//     this.name = name
//     this.age = age
//     this.heightInFeet = heightInFeet
//     this.weightInKg = weightInKg
//     this.gender = gender
//     this.sayHello = function() { alert('Hi, my name is '+this.name)}
// }

// var newPerson = new PersonObject('abc', 24, 5.6, 50, 'male');
// alert(newPerson.name);
// newPerson.sayHello()