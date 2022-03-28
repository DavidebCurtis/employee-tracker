CREATE TABLE departments (
  department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE employees (
  employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  role_id INTEGER REFERENCES roles(role_id),
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  manager_emp_id INTEGER NOT NULL
);

CREATE TABLE roles (
  role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_id INTEGER REFERENCES departments(department_id),
  job_title VARCHAR(50) NOT NULL,
  salary INTEGER NOT NULL
);
/*
-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids
SELECT * FROM departments;

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT roles.job_title, roles.role_id, departments.department_name, roles.salary FROM roles JOIN departments ON roles.department_id=departments.department_id;

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT 
 a.employee_id
,a.first_name
,a.last_name
,b.job_title
,c.department_name
,b.salary
,CONCAT(d.first_name," ",d.last_name) as "Manager Name"

FROM employees a 
JOIN roles b on a.role_id=b.role_id
JOIN departments c on b.department_id=c.department_id
JOIN employees d on a.manager_emp_id=d.employee_id


-- WHEN I choose to add a department
-- THEN I am prompted to enter the name of the department and that department is added to the database
INSERT INTO departments department_name VALUES 
-- place user input here

-- WHEN I choose to add a role
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

INSERT INTO roles (job_title,salary,department_id) VALUES
&job_title, &salary, (SELECT department_id FROM departments WHERE department_name = &department_name);

-- WHEN I choose to add an employee
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
INSERT INTO employees (first_name,last_name, role_id, manager_emp_id) VALUES
&first_name, &last_name, (SELECT role_id from roles where job_title = &job_title), (SELECT manger_emp_id FROM employees WHERE first_name= &first_name AND last_name=&last_name)

-- WHEN I choose to update an employee role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

UPDATE employees set role_id = (SELECT role_id from roles where job_title = &job_title) WHERE employee_id = &employee_id
*/