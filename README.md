## SQL Employee Tracker

## Index
- [Overview](#overview)
  - [Summary](#summary)
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
    * Then type `source db/schema.sql` and `source db/schema.sql`
    * Finally, type `node index.js` in your terminal to get the prompts.

## Links

Repository URL: https://github.com/singharaj-usai/SQL-Employee-Tracker

## Database

The MySql database has 3 tables:

* **repartment**:
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

## Bugs

There's a weird bug that says `this.onResult(error)` for mysql2 package when you attempt to edit employee role. Everything else works.

## Made With

* SQL 
* Node.JS
