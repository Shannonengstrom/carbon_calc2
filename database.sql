CREATE TABLE person (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(80) UNIQUE NOT NULL,
  "password" VARCHAR(1000) NOT NULL
); 

CREATE TABLE logs (
  "id" SERIAL PRIMARY KEY,
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

INSERT INTO logs ("co2_emis", "destination", "date", "miles", "notes", "total_emis", "person_id")
VALUES (30, 'work', '09-15-1991', 5.3, '', 10, 1);


