const inquirer = require('inquirer')

inquirer.prompt([{
  name: 'pergunta1',
  message: 'Qual a primeira nota?'
},
{
  name: 'pergunta2',
  message: 'Qual a segunda nota?'
}
]).then((answers)=>{
  console.log(answers)
}).catch(err =>  console.log(err))