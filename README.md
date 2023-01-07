## SQL Employee Tracker

## Index
- [Overview](#overview)
  - [Summary](#summary)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [Database](#database)
  - [Bugs](#bugs)
  - [Made With](#made-with)

# Overview

⚡ An employee tracker using SQL to store database and Node.JS to inquirer

## Summary

💻 SQL employee directory that uses the command prompt.


* Instructions
    * Download the repo to your machine using the `git clone` tab.
    * On your IDE, use the terminal and type `npm i` and enter to install node_modules.
    * Then run `mysql -u root -p` to login to MySql
    * Then type `source db/schema.sql` and `source db/seeds.sql`
    * Finally, type `node index.js` in your terminal to get the prompts.

## Screenshots
* Run `mysql -u root -p`
  * Enter your MySQL credentials to log-in.
![](./Screenshots/Screenshot%202022-11-16%20230354.png)

* Run `source db/schema.sql`
  * This creates a new schema query.
![](./Screenshots/Screenshot%202022-11-16%20230502.png)

* Then run `source db/seeds.sql`
  * This populates your database schema with the seeds.sql file.
![](./Screenshots/Screenshot%202022-11-16%20230526.png)

* Then enter `quit` in mysql, and then run `node index`
  * You are then finally prompted to the directory.
![](./Screenshots/Screenshot%202022-11-16%20230653.png)

* Select any of the prompted options
  * Update employee roles, Add employee, etc
![](./Screenshots/Screenshot%202022-11-16%20230706.png)

## Links

Repository URL: https://github.com/singharaj-usai/SQL-Employee-Tracker

## Database

The MySql database has 3 tables:

* **department**:
  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30)

* **role**:
  * **id** -INT PRIMARY KEY
  * **title** - VARCHAR(30)
  * **salary** - DECIMAL
  * **department_id** - INT

* **employee**:
  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30)
  * **last_name** - VARCHAR(30)
  * **role_id** - INT
  * **manager_id** - INT

## Made With

* SQL 
* Node.JS
