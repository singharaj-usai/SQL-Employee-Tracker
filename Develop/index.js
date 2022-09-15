const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'password',
    database: 'workplace_db',
},
    console.log(`Connected to workplace_db`)
);

//THEN I am presented with the following options: 
//view all departments, view all roles,
//view all employees, add a department, 
//add a role, add an employee, and update an employee role
const choice = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is ur choice',
            name: 'choices',
            choices: [
                'View All Departments', 'View All Roles',
                'View All Employees', 'Add A Department',
                'Add A Role', 'Add An Employee', 'Update An Employee Role'
            ]
        }
    ]).then(function (choice) {
        switch (choice) {
            case 'View All Departments':
                showDepartments();
                break;
            case 'View All Roles':
                showAllRoles();
                break;
            case 'View All Employees':
                showAllEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update An Employee Role':
                updateEmployee();
                break;
        }
    })
}

choice();

//db.query('SELECT first_name, last_name FROM students', function (err, results) {
//    console.log(results);
//    console.log("*********");
//  });

//Notes from SQL search db.query in the search bar

const showDepartments = () => {
    connection.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        choice();
    });
}

const showAllRoles = () => {
    connection.query('SELECT * FROM role', function (err, results) {
        console.log(results);
        choice();
    });
}

const showAllEmployees = () => {
    connection.query('SELECT employee.id, employee.first_name', 'employee.last_name', 'roles.id', function (err, results) {
        console.log(results);
        choice();
    });
}   

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What department',
            name: 'department',
        }
    ]).then(function (ok) {

   
    connection.query('INSERT INTO department(name) VALUES(?)',
     [ok.name], function (err, results) {
        console.log(results);
        showDepartments();
    })});
}  