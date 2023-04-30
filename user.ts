import inquirer from "inquirer";
import chalk from "chalk";
async function inpt(num1:string,num2:string="input",arr?:string[])
{

let user=await inquirer.prompt([{
    name:"num",
    type:num2,
    message:chalk.yellow(num1),
    choices:arr,
}])
    return user.num;
}
async function emit_cur(arr:string[],cur:string) 
{
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]==cur)
        {
            arr.splice(i,1);
        }

    }
    let change_cur=await inpt("enter the currency in whch you want to convert","rawlist",arr)
    return change_cur
}
export{inpt,emit_cur};