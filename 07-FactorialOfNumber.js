// Program: Find the factorial of a number

function factorial(num){
    let result = 1;
    for(let i = 1; i<=num; i++)
    {
        result *= i;
    }
    return result;
}

let num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);