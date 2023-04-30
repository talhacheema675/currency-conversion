import inquirer from "inquirer";
import chalk from "chalk";
import { inpt,emit_cur} from "./user.js";
import figlet from "figlet";
let arr:string[]=["US dollar","Pound","Yuan","Dirham","PKR","Euro"]
console.log(chalk.red.bold(figlet.textSync("Currency Convertor")));
let original_currency= await inpt("enter currency which you have: ","rawlist",arr);
let emit=await emit_cur(arr,original_currency);
let price= await inpt(`please enter worth of one ${emit} in ${original_currency}`,"number")
let quantity= await inpt(`please enter quantity of ${original_currency} you want to convert`);
console.log(chalk.red.bold.underline(`your converted ${emit} against ${quantity} ${original_currency} are: ${quantity/price}`));

console.log(chalk.yellow.bold(figlet.textSync("Thanks for using Convertor")))
