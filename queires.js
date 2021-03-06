// if (p === "add a department") {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "departmentName",
//         message: "Please a department name: ",
//         validate: (deptInput) => {
//           if (deptInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid department name");
//             return false;
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       const department = answers.departmentName;
//       connection.query(
//         "INSERT INTO departments (department_name) VALUES (?)",
//         [department],
//         function (err, res) {
//           if (err) throw err;
//           console.log(`${department} Department added`);
//           PromptMenu();
//         }
//       );
//     });
// }
// if (p === "add a role") {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "depID",
//         message: "Please enter a department ID: ",
//         validate: (depIDInput) => {
//           if (depIDInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid department ID");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "roleName",
//         message: "Please enter a role name: ",
//         validate: (roleNameInput) => {
//           if (roleNameInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid role name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "salary",
//         message: "Please a salary: ",
//         validate: (salaryInput) => {
//           if (salaryInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid salary");
//             return false;
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       const depID = answers.depID;
//       const roleName = answers.roleName;
//       const salary = answers.salary;
//       connection.query(
//         "INSERT INTO roles (department_id, job_title, salary) VALUES (?, ?, ?)",
//         [depID, roleName, salary],
//         function (err, res) {
//           if (err) throw err;
//           console.log(`${roleName} Role added`);
//           PromptMenu();
//         }
//       );
//     });
// }
// if (p === "add an employee") {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "role",
//         message: "Please enter a role: ",
//         validate: (roleInput) => {
//           if (roleInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid role");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "firstName",
//         message: "Please enter a first name: ",
//         validate: (firstNameInput) => {
//           if (firstNameInput) {
//             return true;
//           } else {
//             console.log("Please enter a first name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "lastName",
//         message: "Please a last name: ",
//         validate: (lastNameInput) => {
//           if (lastNameInput) {
//             return true;
//           } else {
//             console.log("Please enter a last name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "managerID",
//         message: "Please a manager ID: ",
//         validate: (managerIDInput) => {
//           if (managerIDInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid manager ID");
//             return false;
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       const role = answers.role;
//       const firstName = answers.firstName;
//       const lastName = answers.lastName;
//       const managerID = answers.managerID;
//       connection.query(
//         "SELECT role_id FROM roles WHERE job_title= ?",
//         role,
//         function (err, res) {
//           console.log(res);
//         }
//       );
//       connection.query(
//         "INSERT INTO employees (role_id, first_name, last_name, manager_emp_id) VALUES ((SELECT role_id from roles where job_title = '" +
//           role +
//           "'), ?, ?, ?)",
//         [firstName, lastName, managerID],
//         function (err, res) {
//           if (err) throw err;
//           console.log(`${firstName} ${lastName} added to employee list`);
//           PromptMenu();
//         }
//       );
//     });
// }
// if (p === "update an employee role") {
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "employeeName",
//         message: "Please enter a Employee ID: ",
//         validate: (employeeNameInput) => {
//           if (employeeNameInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid Employee ID");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "newRole",
//         message: "Please enter a new role: ",
//         validate: (newRoleInput) => {
//           if (newRoleInput) {
//             return true;
//           } else {
//             console.log("Please enter a new role");
//             return false;
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       const employeeName = answers.employeeName;
//       const newRole = answers.newRole;
//       connection.query(
//         "UPDATE employees SET role_id = (SELECT role_id FROM roles WHERE job_title = '" +
//           newRole +
//           "') WHERE first_name = '" +
//           employeeName +
//           "'",
//         function (err, res) {
//           if (err) throw err;
//           console.table(res);
//           PromptMenu();
//         }
//       );
//     });
// }
