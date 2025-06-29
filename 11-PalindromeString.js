//  Program: Check if a string is a palindrome

function checkPalindromeString(string)
{
    let original = string;
    let reverse = string.split('').reverse().join('');

    if(original === reverse)
    {
        return "Yes";
    }else{
        return "No";
    }
}

console.log(checkPalindromeString("madam"));