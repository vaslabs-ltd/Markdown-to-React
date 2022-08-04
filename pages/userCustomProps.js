const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('fs');

const rl = readline.createInterface({ input, output });
let text;

rl.question('Please select a color for the text: ', (textColor) => {
            rl.question("Please select a background color for your website: ", (bgColor) => {
               rl.question("Please select a background color for the components: ", (componentBg) => {
                rl.question("Please select a text color for the components: ", (componentText) => {
                                     console.log("")
                   console.log("*** YOUR CUSTOMIZATIONS: ***")
                   console.log("====================================================")
                   console.log(`Thank you! \nYour text will be: ${textColor}\nYour background color will be: ${bgColor} \nYour components background color will be: ${componentBg} \nYour component's text color will be ${componentText}`);
                   console.log("====================================================")
                   console.log("")  
                   const customProps = {
                    textColor,
                    bgColor,
                    componentBg,
                    componentText
                   };
                   const myProps = JSON.stringify(customProps);
                   fs.writeFile('./customProps.txt', myProps, err => {
                    if (err) {
                      console.error(err);
                    }
                    // file written successfully
                  });

                   rl.close();
                  
                })
                

                  
               })
           })  
         
       });











// exports.textColor = textColor;
// exports.bgColor = bgColor;
// exports.componentBg;



// const q2  = () => {rl.question('Please select a background color for the website: ', (bgColor) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you, your website's background color will be: ${bgColor}`);
//   });}

// const main = () => {
// q1();
// q2();
// rl.close()
// }


// main()
  

