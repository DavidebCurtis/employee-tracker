const inquirer = require("inquirer");
const connection = require("./connection.js");
const cTable = require("console.table");

const logIt = function (err, res) {
  if (err) throw err;
  console.table(res);
  PromptMenu();
};

const PromptMenu = () => {
  console.log("MENU");
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "menu",
        message: "Pick one of the following feilds",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answers) => {
      const p = answers.menu.toString();
      if (p === "view all departments") {
        connection.query("SELECT * FROM departments", logIt());
      }
      if (p === "view all roles") {
        connection.query(
          "SELECT roles.job_title, roles.role_id, departments.department_name, roles.salary FROM roles JOIN departments ON roles.department_id=departments.department_id;",
          logIt()
        );
      }
      if (p === "view all employees") {
        connection.query(
          "SELECT a.employee_id,a.first_name,a.last_name,b.job_title,c.department_name,b.salary,CONCAT(d.first_name,' ',d.last_name) as 'Manager Name'FROM employees a JOIN roles b on a.role_id=b.role_id JOIN departments c on b.department_id=c.department_id JOIN employees d on a.manager_emp_id=d.employee_id",
          logIt()
        );
      } else
        console.log(`      ==================================
      ====== PLEASE PICK ONLY ONE ======
      ==================================`);
      PromptMenu();
    });
};

PromptMenu();

module.exports = { PromptMenu };
