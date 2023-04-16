// the arrow function
var sum = (a, b) => a + b;
console.log( sum(1, 2) );

function sum2(a,b){
    return a + b;
}
console.log( sum2(5, 6) );

function (a,b){  //anonymous function
    return a * b;
}
console.log( sum2(5, 6) );





//================================================

charThis = passChar.find(item => item.name === charSelect); // change arrow to function()
charThis = passChar.find((item) => {item.name === charSelect});
charThis = passChar.find((item) => {return item.name === charSelect});
charThis = passChar.find(function(item) {return item.name === charSelect});
charThis = passChar.find(function isMatch(item) {return item.name === charSelect});


function isMatch(item){
    return item.name === charSelect;
}

charThis = passChar.find(isMatch);

