// strings are immutable in javascript

// Template literals syntax `the price of ${obj.item} \nis ${obj.price}, ${1 + 2}`

// \n is use to break line

// Strings Methods
// str.toUpperCase() methond for text-transform letters to uppercase
// str.tolowerCase() methond for text-transform letters to lowercase
// str.trim() method to remove white spaces from start and end
// str.slice(1,3) if your variable have str = "01234" the result will comeout as "12"
// str.concat(str2) to combine both variables values, you can also write str + str 2 to combine
// str1.replace("h", "y") if your variable is "hello" then after applying the method the variable will be "yello", 
// str1.replaceAll("h", "y") // str.replaceAll() if you have more than 1 h it will replace all with y
//  str.charAt(0) if your variable is "IloveJS" the method will show the variable of that index like "I", you can also do this with str[0]
 
// Excersie 1
// let Name = prompt("Enter your full name");
// let beforename = "@";
// let afterename = Name.length;
// let username = beforename.concat(Name, afterename);
// document.write(username);