// filter: 
let numbers=[1,2,3,4,5]
let even=numbers.filter(number=>{
    return number%2===0;
})
console.log(even)


// reduce: combine and return single value
let total=numbers.reduce((sum,number)=>{ 
    return sum+number;
},0)
console.log(total);


// maximun
let maximum=numbers.reduce((max,number)=>{
    return max>number?max:number;
},numbers[0])
console.log(maximum);