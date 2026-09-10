// some check werher at least one element satisfies
let marks=[74,38,85,90,95];
let lowmarks=marks.some(mark=>mark<40);
console.log(lowmarks)

let highmark=marks.every(mark=>mark>=40)
console.log(highmark)

