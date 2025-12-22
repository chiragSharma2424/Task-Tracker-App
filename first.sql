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