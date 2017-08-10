"use strict";

/*
Write an ES6 simple algorithm which compute
the first 100n of the Fibonnacci sequence

As a friendly reminder :

∀ n > 2, i(n) = i(n-1) + i(n-2)

Bonus : Format the numbers (tip, check the numeral lib on npmjs.com)

*/

var rabbit = `             ,
            /|      __
           / |   ,-~ /
          Y :|  //  /
          | jj /( .^
          >-"~"-v"
         /       Y
        jo  o    |
       ( ~T~     j
        >._-' _./
       /   "~"  |
~~~~~~~~~~~~~~~~~~~~~~~~~~`;

var credits = `    Fibonacci Sequence
(La reproduction des lapins)`;

console.log(rabbit);
console.log(credits);

/* Play here */

var fibonnacci = [];
fibonnacci[0] = 0;
fibonnacci[1] = 1;

for (var i = 2; i < 100; i++) {
    fibonnacci[i] = fibonnacci[i - 1] + fibonnacci[i - 2];
    console.log(fibonnacci[i]);
}
