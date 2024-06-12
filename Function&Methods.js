// Higher Order Function are those functions/methods which can take other function as parameter or return a function 
// function permeters are local variable and block scope
// retrun is used in function to store the calculation into variable or function
// Excersie 1/ create a function to count vowels
// Normal Function
// function findvowels(str){
//     let count = 0;
//     for(let i of str){
//         if(i === "a" || i === "e" || i === "i" || i === "o" ||  i === "u"){
//              count++;
//         }
//     }
// console.log(count);
// }

// Arrow Function
// var vowels = (str)=>{
//         let count = 0;
//         for(let i of str){
//             if(i === "a" || i === "e" || i === "i" || i === "o" ||  i === "u"){
//                  count++;
//             }
//         }
//     return(count);
//     }



// function can be pass as parameters
// for Each loop has 3 parameters value, index, array
// for Each loop syntax:
// let arr = [1,2,3,4,5]
// arr.forEach(function myFunction(value){
//     console.log(value);
// })

// Excersice 1/ for a given array of numbers print the square of each 
// let arr = [1,2,3,4,5]
// arr.forEach(function myFunction(value){
//     let square = value ** 2;
//     console.log(square)
//     })


// Difference between Map Method and for each is map is used to create new array
// Map method is similar to foreach
// let arr = [1,2,3,4,5]
// arr.map(function myFunction(value,index,array){
//     let square = value ** 2;
//     console.log(square,index,array)
//     })
 
// Filter Method
// Filter Method is used for get the filter out values by some condition
// syntax
// let arr = [1,2,3,4,5]
// let evenarray = arr.filter((value)=>{
//     return value % 2 === 0;
//     })
//     console.log(evenarray)

// Reduce Method
// Reduce is use to output single value
// Reduce have 2 values result & current
// Reduce take first index of array and stores it into result and take second index of array and stores it into current and after calculating the sum the value will store into result and then function will take 3rd index and store it into current and so on

// Reduce Syntax
let arr = [1,2,3,4,5]
arr.reduce((res,curr)=>{
    return res + curr;
})
 
console.log(arr)