-- questions for practice
CREATE TABLE Employees (
    emp_id        INT PRIMARY KEY,
    first_name    VARCHAR(50),
    last_name     VARCHAR(50),
    salary        DECIMAL(10,2),
    department_id INT,
    manager_id    INT,
    hire_date     DATE,
    age           INT,
    middle_name   VARCHAR(50)
);


CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);


CREATE TABLE EmployeeInfo (
    EmpID     INT PRIMARY KEY,
    EmpFname  VARCHAR(50),
    EmpLname  VARCHAR(50),
    EmpSalary DECIMAL(10,2),
    EmpDept   VARCHAR(50),
    Age       INT,
    HireDate  DATE
);


CREATE TABLE EmployeeSalary (
    EmpID  INT,
    Salary DECIMAL(10,2)
);
