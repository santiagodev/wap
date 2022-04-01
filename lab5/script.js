
/* 
1. Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20. */


/* 
Legacy
function sum(){
    let accumulator =0;
    console.log(arguments);
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if(element>20){
            accumulator+=element;
        }
    }
    return accumulator;
}
console.log(sum(1,2,30,30));
 */ 

function sum(arr){
    return arr.filter( (item)=> item>20 ).reduce((accum, num) => accum + num, 0) ;
}
console.log(sum([1,2,30,31]));



 
 
/* 2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’. */

/* 
Legacy: 

const getNewArray = (str) => {

    let accumulator = [];
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        
        
        if(element.length>=5 && element.indexOf("a")>=0 ){
            accumulator.push(element); 
        }
        console.log(element.indexOf("a")); 
        console.log(element);
    }
    return accumulator; 


    return  str.filter( (element)=> element.length>=5 && element.indexOf("a")>=0 );

}
console.log( getNewArray(["aaa","bbbbb","ccccaccc","ddadd"]) );
 */


const getNewArray = (item)=> item.filter( (element)=> element.length>=5 && element.indexOf("a")>=0 );
console.log( getNewArray(["aaa","bbbbb","ccccaccc","ddadd"]) );