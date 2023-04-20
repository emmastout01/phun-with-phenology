
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "note" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user",
    "date" DATE,
    "time" VARCHAR (40),
    "location" VARCHAR (1000),
    "content" TEXT
    );
    
CREATE TABLE "bird" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (500),
    "photo" VARCHAR (2000)
    );
    
CREATE TABLE "bird_note" (
    "id" SERIAL PRIMARY KEY,
    "bird_id" INTEGER REFERENCES "bird",
    "note_id" INTEGER REFERENCES "note", 
    "content" TEXT
    );