// Program: Check if a number is a palindrome

function checkPalindrome(num)
{
    let original = num;
    let reverse = 0;
    while(num > 0)
    {   
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }
    
    if(original == reverse)
    {
        return "Yes";
    }else{
        return "No";
    }
}

console.log(checkPalindrome(151));