'use stricct';

let firstnumber=parseInt(prompt('please insert number'));
let secondnumber=parseInt(prompt('please insert number'));
let thirdnumber=parseInt(prompt('please insert number'));
let fourthnumber=parseInt(prompt('please insert number'));
let fifthnumber=parseInt(prompt('please insert number'));

let max= Math.max(firstnumber,secondnumber,thirdnumber,fourthnumber,fifthnumber);
let min= Math.min(firstnumber,secondnumber,thirdnumber,fourthnumber,fifthnumber);

console.log(min,max);

alert('max: '+max+' min: '+min);



