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
function choice() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is ur choice',
            name: 'choices',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role'
            ]
        }
    ]).then(function (choice) {
        switch (choice.choices) {
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
            case 'EXIT':
                exit();
                break;
            default:
                break;
        };
    });
};

choice();

//db.query('SELECT first_name, last_name FROM students', function (err, results) {
//    console.log(results);
//    console.log("*********");
//  });

//Notes from SQL search db.query in the search bar

const showDepartments = () => {
    connection.query('SELECT * FROM department', function (err, results) {
        if (err) throw err;
        console.log(results);
        choice();
    });
};

const showAllRoles = () => {
    connection.query('SELECT * FROM role', function (err, results) {
        if (err) throw err;
        console.log(results);
        choice();
    });
};

const showAllEmployees = () => {
    connection.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err;
        console.log(results);
        choice();
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What department',
            name: 'department',
        },
    ]).then(function (ok) {
        connection.query('INSERT INTO department SET ?',
            { name: ok.department })
        [ok.name],
            connection.query('SELECT * FROM department', function (err, results) {
                if (err) throw err;
                console.log(results);
                choice();
            });
    });
};

const addRole = () => {

    inquirer.prompt([
        {
            name: 'newRole',
            type: 'input',
            message: "Enter name of new role?"
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of this role? (Enter a number)'
        },
        {
            name: 'department',
            type: 'list',
            choices: function () {
                var deptArry = [];
                for (let i = 0; i < res.length; i++) {
                    deptArry.push(res[i].name);
                };
                return deptArry;
            },
        },
    ]).then(function (entry) {
        let department_id;
        for (let a = 0; a < res.length; a++) {
            if (res[a].name == entry.department) {
                department_id = res[a].id;
            };
        };

        connection.query('INSERT INTO role SET ?',
            {
                title: entry.newRole,
                salary: entry.salary,
                department_id: department_id
            },
            connection.query('SELECT * FROM department', function (err, results) {
                if (err) throw err;
                console.log(results);
                choice();
            }));
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Enter their first name "
        },
        {
            name: "lastName",
            type: "input",
            message: "Enter their last name "
        },
        {
            name: "role",
            type: "list",
            message: "What is their role? ",
            choices: selectRole()
        },
        {
            name: "choice",
            type: "rawlist",
            message: "Whats their managers name?",
            choices: selectManager()
        }
    ]).then(function (val) {
        var roleId = selectRole().indexOf(val.role) + 1
        var managerId = selectManager().indexOf(val.choice) + 1
        connection.query("INSERT INTO employee SET ?",
            {
                first_name: val.firstName,
                last_name: val.lastName,
                manager_id: managerId,
                role_id: roleId
            }, 
            function (err) {
                if (err) throw err
                console.log(val)
                choice()
            });
    });
};

const updateEmployee = () => {
    connection.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;", function (err, results) {
        if (err) throw err;
        console.log(results);
        inquirer.prompt([
            {
                name: "lastName",
                type: "rawlist",
                choices: function () {
                    var lastName = [];
                    for (var i = 0; i < res.length; i++) {
                        lastName.push(res[i].last_name);
                    }
                    return lastName;
                },
                message: "What is the Employee's last name? ",
            },
            {
                name: "role",
                type: "rawlist",
                message: "What is the Employees new title? ",
                choices: selectRole()
            }
        ]).then(function (val) {
            var roleId = selectRole().indexOf(val.role) + 1
            connection.query("UPDATE employee SET WHERE ?",
                {
                    last_name: val.lastName
                },
                {
                    role_id: roleId
                },
                function (err, results) {
                    if (err) throw err;
                    console.log(results);
                    choice();
                });
        });
    });
};

//callbacks
var roleArray = [];
const selectRole = () => {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            roleArray.push(res[i].title);
        };
    });
    return roleArray;
};

var managersArray = [];
const selectManager = () => {
    connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            managersArray.push(res[i].first_name);
        };
    });
    return managersArray;
};

const exit = () => {
    connection.end();
};

