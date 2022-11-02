USE workplace_db;

INSERT INTO department (name)
VALUES  ("Intern"),
        ("Scientist"),
        ("Lab Assistant"),
        ("Manager"),
        ("Director"),
        ("CEO");

INSERT INTO role (title, salary, department_id)
VALUES  ("Intern", 0, 1),
        ("Scientist", 20000, 2),
        ("Lab Assistant", 10000, 3),
        ("Manager", 15000, 4),
        ("Director", 100000, 5),
        ("CEO", 500000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, 4),
        ("Pinky", "Brown", 2, 4),
        ("Mick", "Todd", 3, NULL),
        ("George", "Little", 4, NULL),
        ("Jack", "Duke", 5, NULL),
        ("Chicken", "Little", 6, 4);    