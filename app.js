console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++)
    if(i % 2 != 0){
        console.log(i);
    }
    else
    console.log;



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

console.log("FIZZBUZZ Challenge")
for(let i = 1; i <= 100; i++)
{
    if(i % 3 == 0 && i % 5 ==0)
    {
        console.log(`FIZZBUZZ ${i}`);
    }
    else if(i % 5 == 0)
    {
        console.log(`BUZZ ${i}`);
    }
    else if(i % 3 == 0)
    {
        console.log(`FIZZ ${i}`);
    }

}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let num = 0;
while(num <= 100){
        if(num %2 != 0){
            console.log(num);    
        } 
        num++;
}

console.log("====================");
console.log("---- Do/While Loop----");
console.log("====================");

let number = 0;
do{
    if(number % 2 != 0){
        console.log(number);
    }
    number++;
}while(number < 100);

console.log("FIZZBUZZ Loops");
console.log("----------")
console.log("----While LOOP----")

let testNum = 0;
let targetNumber = 100;
while(testNum < targetNumber){
    if(testNum % 3 == 0 && testNum % 5 == 0){
        console.log(`FIZZBUZZ ${testNum}`);
    }
    else if(testNum % 5 == 0){
        console.log(`BUZZ ${testNum}`);
    }
    else if(testNum % 3 == 0){
        console.log(`FIZZ ${testNum}`);
    }
    testNum++
}

console.log("----Do/While LOOP----")

let startNum = 1;
do{
    if(startNum % 3 == 0 && startNum % 5 == 0)
    {
        console.log(`FIZZBUZZ ${startNum}`);
    }
    else if(startNum % 5 == 0)
    {
        console.log(`BUZZ ${startNum}`);
    }
    else(startNum % 3 ==0)
    {
        console.log(`FIZZ ${startNum}`);
    }
    startNum++;

}while(startNum < 100);

console.log("Exercise 4 ----Find Value----")
console.log("-----------")

let value = Math.round((Math.random() * 500));

let n = Math.round(Math.random() * (500 - 100) + 100);
for(let i = 0; i = n; i++){
    if(i == n)
    {
        console.log(`Found Value ${i}`);
        break;
       
    }

    console.log("Value Not Found.")

}

console.log("Exercise 5 ----Customized FIZZBUZZ----");
console.log("----------");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let j = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(let i = start; i <= j; i++)
{
    if(i % fizzDivisor == 0)
    {
        console.log(`FIZZ ${i}`);
    }
    else if(i % buzzDivisor == 0)
    {
        console.log(`BUZZ ${i}`);
    }
    
    console.log(`Sorry no FIZZ or BUZZ here! ${i}`);
    
}





