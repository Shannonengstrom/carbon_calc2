CREATE TABLE person (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(80) UNIQUE NOT NULL,
  "password" VARCHAR(1000) NOT NULL
); 

CREATE TABLE logs (
  "id" SERIAL PRIMARY KEY,
  "mode" VARCHAR(20),
  "co2_emis" DECIMAL NOT NULL,
  "destination" VARCHAR(80) NOT NULL,
  "date" date NOT NULL,
  "miles" DECIMAL NOT NULL,
  "notes" VARCHAR(200),
  "total_emis" DECIMAL,
  "person_id" INT REFERENCES person
); 


INSERT INTO person ("username", "password")
VALUES ('test1', 'password123'), ('test2', 'password123'), ('test3', 'password123'), ('test4', 'password123'),
('test5', 'password123'), ('test6', 'password123'), ('test7', 'password123');

INSERT INTO logs ("mode", "co2_emis", "destination", "date", "miles", "notes", "total_emis", "person_id")
VALUES ('bike', 30, 'work', '09-15-1991', 5.3, '', 10, 1);

SELECT SUM(total_emis)
FROM logs;

UPDATE logs
SET mode = $1, co2_emis = $2, destination = $3, date = $4, miles = $5, notes = $6
WHERE id = ${id};