let a = 10

function house () {
 a = 20;
 console.log(a)
}

house();

let b = 10;

console.log("1", b);
function one() {
  b = 20;
}
console.log("2", b);
one();
console.log("3", b)




let myName = "Hugo";
function sayHi() {    

    let myName = "Hugo";
    console.log(myName + "says good morning.")
     //obama
    function sayHi2() {
        console.log(myName + "says good morning again");
    }

    function sayHi3() {
        let myName = "Jacinda";
        sayHi2();
    }
    sayHi3();
}
sayHi();

let x = 'pen';

function b1 () {
    let x = 'apple'
    console.log(x)
}

