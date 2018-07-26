-- Setup Instructions: 
-- create `person` and `logs` tables

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
