//hoisting
console.log(age)

//tdz start
let age=19 // Temporal Dead Zone (works on let and const)
// tdz end here


// closures
// inner function remember varibles of outer function
function outer(){
    let counter=0;
    function inner()
    {
        counter++;
        console.log(counter);
    }
    return inner();
}
let i=outer();
i();
i();
i();


// higher order Function
// one function use another function as argument and return a function
function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function mul(x,y)
{
    return x*y;
}
console.log(calculate(10,20,add));
console.log(calculate(10,20,mul));