// Program: Reverse a String

function reverseString(str)
{
    let reverseString = str.split('').reverse().join('');
    return reverseString;
}

console.log(reverseString("Shubham"));