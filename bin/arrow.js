// // the arrow function
// var sum = (a, b) => a + b;
// console.log( sum(1, 2) );

// function sum2(a,b){
//     return a + b;
// }
// console.log( sum2(5, 6) );

// function (a,b){  //anonymous function
//     return a * b;
// }
// console.log( sum2(5, 6) );





// //================================================

// charThis = passChar.find(item => item.name === charSelect); // change arrow to function()
// charThis = passChar.find((item) => {item.name === charSelect});
// charThis = passChar.find((item) => {return item.name === charSelect});
// charThis = passChar.find(function(item) {return item.name === charSelect});
// charThis = passChar.find(function isMatch(item) {return item.name === charSelect});


// function isMatch(item){
//     return item.name === charSelect;
// }

// charThis = passChar.find(isMatch);


//================================================
const items = {
    a: false,
    b: true,
    c: false,
    d: false,
    e: false
  };
  
//   const count = Object.values(items).filter(item => item === true).length;
//   console.log(count);//1
//   const count = Object.values(items).filter((item) => {item === true}).length;
//   const count = Object.values(items).filter((item) => {return item === true}).length;
//   const count = Object.values(items).filter(function(item) {return item === true}).length;
//   const count = Object.values(items).filter(function counter(item) {return item === true}).length;
//   const count = Object.values(items).filter(function counter(item) {return item === true}).length;
//   function counter(item) {
//     return item === true;
// }
var countx = Object.values(items).filter(function(item) {
    return item === true;
}).length; 
console.log(countx);

 var passChar = [
    {
        id: 'A',
        select: false
    }
    {
        id: 'B',
        select: false
    }
    {
        id: 'C',
        select: true
    }
 ];
var count = Object.values(passChar[i][1]).filter(function(item) {
    return item === true;
}).length; 
console.log(count);