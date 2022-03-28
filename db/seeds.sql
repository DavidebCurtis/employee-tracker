DELETE FROM departments;
DELETE FROM roles;
DELETE FROM employees;

INSERT INTO departments (department_name)
VALUES
  ('Front End'),
  ('Meat'),
  ('Seafood'),
  ('Bakery'),
  ('Produce'),
  ('Shipping and Receiving');

INSERT INTO roles (department_id, job_title, salary)
VALUES
-- Front End
  (1, 'Manager', 60000),
  (1, 'Team Lead', 25000),
  (1, 'Cashier', 23000), 
  (1, 'Bagger', 23000),
-- Meat
  (2, 'Team Lead', 34000),
  (2, 'Meat Cutter', 30000),
  (2, 'Meat Clerk', 28000),
-- Seafood
  (3, 'Team Lead', 34000),
  (3, 'Seafood Clerk', 28000),
-- Bakery
  (4, 'Team lead', 34000),
  (4, 'Baker', 30000),
  (4, 'Baker Associate', 28000),
-- Produce
  (5, 'Team Lead', 34000),
  (5, 'Produce Stock Clerk', 28000),
-- Shipping and Receiving 
  (6, 'Team Lead', 36000),
  (6, 'Dock Associate', 31000),
  (6, 'Stock Clerk', 28000);

INSERT INTO employees (role_id, first_name, last_name, manager_emp_id)
VALUES
  (1, 'Bentley', 'Booth',1),
  (2, 'Horace', 'Andrews',1),
  (3,'Roseanna', 'Warren',2),
  (4, 'Kimberley', 'Southern',2),
  (5, 'Gregor', 'Williams',1), 
  (6, 'John', 'Shields',5),
  (7, 'Douglas', 'Fitzgerald',5),
  (8, 'Meera', 'Lynn',1),
  (9, 'Kay', 'Hoover',8),
  (10, 'Lydia', 'Davenport',1),
  (11, 'Milana', 'Watts',10),
  (12, 'Lyla-Rose', 'Frazier',10),
  (13, 'Megan', 'Beltran',1),
  (14, 'Kenzie', 'Vaughan',13),
  (15, 'Jamil', 'Dodd',1),
  (16, 'Abdulahi', 'Parkes',15),
  (17, 'Bill', 'Hayden',15),
  (4, 'Harris', 'George',2),
  (7, 'Mirza', 'Rigby',5),
  (3, 'Franklyn', 'Mcphee',2),
  (9, 'Adrian', 'Cullen',8),
  (9, 'Portia', 'Coleman',8),
  (17, 'Christiana', 'Winters',15),
  (16, 'Dustin', 'Pennington',15),
  (12, 'Huda', 'Petty',10),
  (11, 'Silas', 'Samuels',10);
  

  


  