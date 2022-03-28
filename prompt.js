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
      }
      if (p === "add a department") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "departmentName",
              message: "Please a department name: ",
              validate: (deptInput) => {
                if (deptInput) {
                  return true;
                } else {
                  console.log("Please enter a valid department name");
                  return false;
                }
              },
            },
          ])
          .then((answers) => {
            const department = answers.departmentName;
            connection.query(
              "INSERT INTO departments (department_name) VALUES (?)",
              [department],
              function (err, res) {
                if (err) throw err;
                console.log(`${department} Department added`);
                PromptMenu();
              }
            );
          });
      }
      if (p === "add a role") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "depID",
              message: "Please enter a department ID: ",
              validate: (depIDInput) => {
                if (depIDInput) {
                  return true;
                } else {
                  console.log("Please enter a valid department ID");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "roleName",
              message: "Please enter a role name: ",
              validate: (roleNameInput) => {
                if (roleNameInput) {
                  return true;
                } else {
                  console.log("Please enter a valid role name");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "salary",
              message: "Please a salary: ",
              validate: (salaryInput) => {
                if (salaryInput) {
                  return true;
                } else {
                  console.log("Please enter a valid salary");
                  return false;
                }
              },
            },
          ])
          .then((answers) => {
            const depID = answers.depID;
            const roleName = answers.roleName;
            const salary = answers.salary;
            connection.query(
              "INSERT INTO roles (department_id, job_title, salary) VALUES (?, ?, ?)",
              [depID, roleName, salary],
              function (err, res) {
                if (err) throw err;
                console.log(`${roleName} Role added`);
                PromptMenu();
              }
            );
          });
      }
      if (p === "add an employee") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "role",
              message: "Please enter a role: ",
              validate: (roleInput) => {
                if (roleInput) {
                  return true;
                } else {
                  console.log("Please enter a valid role");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "firstName",
              message: "Please enter a first name: ",
              validate: (firstNameInput) => {
                if (firstNameInput) {
                  return true;
                } else {
                  console.log("Please enter a first name");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "lastName",
              message: "Please a last name: ",
              validate: (lastNameInput) => {
                if (lastNameInput) {
                  return true;
                } else {
                  console.log("Please enter a last name");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "managerID",
              message: "Please a manager ID: ",
              validate: (managerIDInput) => {
                if (managerIDInput) {
                  return true;
                } else {
                  console.log("Please enter a valid manager ID");
                  return false;
                }
              },
            },
          ])
          .then((answers) => {
            const role = answers.role;
            const firstName = answers.firstName;
            const lastName = answers.lastName;
            const managerID = answers.managerID;
            connection.query(
              "SELECT role_id FROM roles WHERE job_title= ?",
              role,
              function (err, res) {
                console.log(res);
              }
            );
            connection.query(
              "INSERT INTO employees (role_id, first_name, last_name, manager_emp_id) VALUES ((SELECT role_id from roles where job_title = '" +
                role +
                "'), ?, ?, ?)",
              [firstName, lastName, managerID],
              function (err, res) {
                if (err) throw err;
                console.log(`${firstName} ${lastName} added to employee list`);
                PromptMenu();
              }
            );
          });
      }
      if (p === "update an employee role") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "employeeName",
              message: "Please enter a Employee ID: ",
              validate: (employeeNameInput) => {
                if (employeeNameInput) {
                  return true;
                } else {
                  console.log("Please enter a valid Employee ID");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "newRole",
              message: "Please enter a new role: ",
              validate: (newRoleInput) => {
                if (newRoleInput) {
                  return true;
                } else {
                  console.log("Please enter a new role");
                  return false;
                }
              },
            },
          ])
          .then((answers) => {
            const employeeName = answers.employeeName;
            const newRole = answers.newRole;
            connection.query(
              "UPDATE employees SET role_id = (SELECT role_id FROM roles WHERE job_title = '" +
                newRole +
                "') WHERE first_name = '" +
                employeeName +
                "'",
              function (err, res) {
                if (err) throw err;
                console.table(res);
                PromptMenu();
              }
            );
          });
      } else
        console.log(`      ==================================
      ====== PLEASE PICK ONLY ONE ======
      ==================================`);
      PromptMenu();
    });
};

PromptMenu();

module.exports = { PromptMenu };
