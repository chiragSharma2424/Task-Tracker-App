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









-- inserting data in tables
INSERT INTO Employees VALUES
(101, 'Chirag', 'Sharma', 60000, 10, NULL, TO_DATE('01-11-2025','DD-MM-YYYY'), 21, NULL);

INSERT INTO Employees VALUES
(102, 'Nikita', 'Dangi', 45000, 20, 101, TO_DATE('15-03-2022','DD-MM-YYYY'), 23, NULL);

INSERT INTO Employees VALUES
(103, 'Chinnu', 'Sharma', 40000, 10, 101, TO_DATE('10-07-2021','DD-MM-YYYY'), 24, NULL);

INSERT INTO Employees VALUES
(104, 'Himank', 'Lohar', 55000, 30, 101, TO_DATE('20-01-2020','DD-MM-YYYY'), 26, NULL);

INSERT INTO Employees VALUES
(105, 'Kapil', 'Kalal', 48000, 20, 102, TO_DATE('05-06-2019','DD-MM-YYYY'), 27, NULL);

INSERT INTO Employees VALUES
(106, 'Rohit', 'Verma', 52000, 30, 104, TO_DATE('18-09-2018','DD-MM-YYYY'), 28, NULL);

INSERT INTO Employees VALUES
(107, 'Prateek', 'Singh', 47000, 10, 103, TO_DATE('11-12-2020','DD-MM-YYYY'), 25, NULL);

INSERT INTO Employees VALUES
(108, 'Karan', 'Mehta', 65000, 40, NULL, TO_DATE('01-04-2017','DD-MM-YYYY'), 30, NULL);

INSERT INTO Employees VALUES
(109, 'Richa', 'Shah', 43000, 20, 105, TO_DATE('23-08-2021','DD-MM-YYYY'), 24, NULL);

INSERT INTO Employees VALUES
(110, 'Bhumika', 'Joshi', 39000, 40, 108, TO_DATE('14-02-2023','DD-MM-YYYY'), 22, NULL);



-- inserting into departments
INSERT INTO Departments VALUES (10, 'IT');
INSERT INTO Departments VALUES (20, 'Sales');
INSERT INTO Departments VALUES (30, 'Marketing');
INSERT INTO Departments VALUES (40, 'HR');
