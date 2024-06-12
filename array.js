// Arrays are Mutable and Non-Primitive
// Arrays are iterable
// syntax of Array let marks = [97,90,99,12,54];

// Excersie 1 how to find average marks
// let marks = [85,97,44,37,76,60];
// sum = 0;
// for(i = 0; i < marks.length; i++){
//     sum = sum + marks[i] / marks.length;
// }
// console.log(sum)

// Excersie 2 Change the array to store final price after applying 10 % offer
// let items = [250,640,300,900,50];

//Shradha solved 
    // let i = 0;
    // for(let val of items){
    //     let offer = val / 10;
    //     items[i] = items[i] - offer;
    //     console.log(`value of offer = ${items[i]}`);
    //     i++;
    // }

// self solved
//     for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`value of offer = ${items[i]}`);
// }


// Arrays Methods
// push(value) to add a value into an array in the last 
// pop() to remove a value into an array in the last 
// toString() to convert an array into strings, return a new array
// arr1.Concat(arr2) to join multiple arrays, return a new array
// arr.unshift("antman") to add an value into an array in the first
// shift() to delete an value into an array in the first
// slice(start,end) to remove an value from an array it doesn't include the end number
// splice(index,remove,add) can add, remove and replace an array


// Excersie// Create and array to store companies ["Bloomberg", "Microsoft", "Uber",//]
// a.Remove the first company from the array
// b.Remove Uber & Add Ola in it's place
// c.Add Amazon at the end
// Sol
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let remove = companies.shift();
// let removeandadd = companies.splice(1,1,"Ola");
// let final = companies.push("Amazon");
// let finaly = remove.concat(removeandadd, final)
// console.log(companies)

