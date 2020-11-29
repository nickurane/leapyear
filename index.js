var readlinesync=require('readline-sync');
var chalk=require('chalk');
var username=readlinesync.question("Hey ! what is Your Name ");
 console.log("hi "+chalk.blue(username))
// To determine whether a year is a leap year, follow these //steps:
// If the year is evenly divisible by 4, go to step 2. ...
// If the year is evenly divisible by 100, go to step 3. ...
// If the year is evenly divisible by 400, go to step 4. ...
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days)
var input=readlinesync.question("Enter Your Birthdate in DD/MM/YYYY ");
var date=input.split("/");

var year=parseInt(date[2],10)
console.log(year);
 if(year%4==0&&(year%100!=0||year%400==0))
 {
   console.log(chalk.blue(username)+" your birth year is  a leap year");
 }
 else
 {
    console.log(chalk.blue(username)+" your birth year is not a leap year");
 }

console.log(chalk.blue("thank You for trying it have have a nice day"));














