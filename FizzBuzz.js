// Exercise #2: Fizzbuzz
// Counting from 0 to 100, print out each number to the console, making the following substitutions …
// … If the number is a multiple of 3, print `fizz` in place of the number
// … If the number is a multiple of 5, print `buzz` in place of the number
// … If the number is a multiple of both 3 and 5, print `fizzbuzz` in place of the number
// … Otherwise, just print the number itself.
// Each entry should be printed to a new line.
// Counting from 0 to 100, print out each number to the console

for (var i = 1; i <= 100; i++) {
    document.write("<br>");
   if (i % 15 === 0) console.log("FizzBuzz"); //If number is divisible by both 3 and 5
   else if (i % 3 === 0) console.log("Fizz"); //If number is divisible by 
   else if (i % 5 === 0) console.log("Buzz"); //If number is divisible by 5
   else document.write(i);
}
