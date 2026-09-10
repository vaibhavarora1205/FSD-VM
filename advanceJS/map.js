// map
// create new array and tranform elements
arr=[1,2,3,4,5];
let arr1;
for(let i=0;i<5;i++)
{
    arr1[i]=arr[i]*arr[i]
}
console.log(arr1)


let numbers=[1,2,3,4,5];
let square=numbers.map(function(number){
    return number*number;
})
console.log(square);

square=numbers.map((number)=>{
    number*number;
})