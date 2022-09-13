
--STUFF FROM SCHEMA.SQL LOOK INTO FILE FOR REFERENCE
--USE NOTES IN 20-Stu_Foreign-Primary-Key
INSERT INTO department (id, name) --ID AND NAME
VALUES  (001, "Intern"),
        (002, "Scientist"),
        (003, "Lab Assistant"),
        (004, "Manager"),
        (005, "Director"),
        (006, "CEO");

INSERT INTO role (id, title, salary, department_id) --ID, TITLE, SALARY, DEPARTMENTID
VALUES  (001, "Intern", 0, 1),
        (002, "Scientist", 20000, 2),
        (003, "Lab Assistant", 10000, 3),
        (004, "Manager", 15000, 4)
        (005, "Director", 100000, 5),
        (006, "CEO", 500000, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, "John", "Doe", 1, 4),
        (002, "Pinky", "Brown", 2, 4),
        (003, "Mick", "Todd", 3, null),
        (004, "George", "Little", 4, null),
        (005, "Jack", "Duke", 5, null),
        (006, "Chicken", "Little", 6, 4);    