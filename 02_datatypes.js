/* use ECEMSCRIPT for standard references of the JS syntaxes etc.
also mdn */

// alert("hello.")  throws err because alerts works only in browsers.

//datatypes:

/* 1. number - range of 2^53'  eg : let seven = 7
   2. bigint - large numbers   
   3. boolean - true , false   eg : let tick = true
   4. string - " " , ' '       eg : let state1 = "bihar" 
   5. null - standalone value  eg : let state = null;
   6. undefined - nothing initialised  eg : let name;
*/
let num = 7
let state = true
let city = "bihar"
let temperature = null // null => we dont know the value it doesnt mean it is not defined.
let name; // this is undefined.
console.table([num,state,city,temperature,name])
console.log(typeof state)  // for knowing what type it belons to 